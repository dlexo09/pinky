# Pinky Prints

Sitio web de Pinky Prints by Vania Zeret (sublimación y DTF). Astro estático, desplegado en AWS (S3 + CloudFront).

## Desarrollo
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Configuración
Todos los datos del negocio (WhatsApp, redes, dominio, Pixel/GA4, endpoint de leads) están en `src/config.ts`.

## Despliegue
```bash
AWS_PROFILE=webartisan npm run deploy   # crea/actualiza infra (infra/site.yaml), sube dist/ a S3 e invalida CloudFront
```
Requiere AWS CLI y un perfil explícito (`AWS_PROFILE`); el script no despliega sin él. Para dominio propio: `DOMAIN=... CERT_ARN=... npm run deploy` (certificado ACM en us-east-1).

## Leads
Registro en Google Sheets vía Apps Script: ver `docs/LEADS.md`.

---
Sitio desarrollado con ♥ por [WebArtisan](https://www.webartisan.com.mx/).
