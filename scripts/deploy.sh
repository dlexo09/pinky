#!/usr/bin/env bash
# Uso: AWS_PROFILE=webartisan npm run deploy   (primera vez crea la infraestructura; despues solo sube el sitio)
# Opcional: DOMAIN=pinkyprints.com.mx CERT_ARN=arn:aws:acm:us-east-1:... npm run deploy
set -euo pipefail
cd "$(dirname "$0")/.."

# Exige perfil explicito para no desplegar en la cuenta equivocada
: "${AWS_PROFILE:?Define el perfil: AWS_PROFILE=webartisan npm run deploy}"
ACCOUNT=$(aws sts get-caller-identity --query Account --output text)
echo "==> Perfil: $AWS_PROFILE | Cuenta: $ACCOUNT"

STACK=pinkyprints-site
REGION=us-east-1   # CloudFront/ACM viven en us-east-1
export AWS_DEFAULT_REGION=$REGION

echo "==> Infraestructura ($STACK)"
aws cloudformation deploy \
  --stack-name "$STACK" \
  --template-file infra/site.yaml \
  --parameter-overrides DomainName="${DOMAIN:-}" CertificateArn="${CERT_ARN:-}" \
  --no-fail-on-empty-changeset

out() { aws cloudformation describe-stacks --stack-name "$STACK" --query "Stacks[0].Outputs[?OutputKey=='$1'].OutputValue" --output text; }
BUCKET=$(out BucketName); DIST=$(out DistributionId); CFDOM=$(out CloudFrontDomain)

echo "==> Build"
npm run build

echo "==> Subiendo a s3://$BUCKET"
# Archivos con hash (/_astro) -> cache de 1 año; el resto -> revalidar siempre
aws s3 sync dist/ "s3://$BUCKET/" --delete --exclude "_astro/*" --cache-control "public, max-age=0, must-revalidate"
aws s3 sync dist/_astro "s3://$BUCKET/_astro" --delete --cache-control "public, max-age=31536000, immutable"

echo "==> Limpiando cache de CloudFront"
aws cloudfront create-invalidation --distribution-id "$DIST" --paths "/*" --query "Invalidation.Id" --output text

echo
echo "Listo: https://$CFDOM"
