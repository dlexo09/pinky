// Datos del negocio: edita SOLO aquí y se actualiza todo el sitio (SEO, JSON-LD, WhatsApp).
export const SITE = {
  name: 'Pinky Prints',
  owner: 'Vania Zeret',
  url: 'https://pinkyprints.example.com', // TODO: dominio real
  whatsapp: '525547862732',
  whatsappDisplay: '+52 55 4786 2732',
  city: 'Gustavo A. Madero',
  region: 'CDMX',
  instagram: 'https://www.instagram.com/pinkyprintsbyvaniazeret',
  facebook: 'https://www.facebook.com/profile.php?id=61596112456110',
  // Seguimiento (vacio = desactivado). Ver docs/LEADS.md
  leadsEndpoint: 'https://script.google.com/macros/s/AKfycbyPic9HEayv-d75YMXVrXzEgUrqUzc4aSe_efnhb-5eVR_lxa01zEGz5uY6MFohL1u5Fw/exec', // URL de la Web App de Apps Script
  metaPixelId: '', // ID numerico del Meta Pixel
  ga4Id: '', // ej. G-XXXXXXXXXX
  description:
    'Personalización con sublimación y DTF: tazas, termos, playeras, gorras y más. Diseños únicos hechos a tu medida por Vania Zeret.',
};

export const waLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const FAQ = [
  {
    q: '¿Qué es la sublimación y qué productos se pueden personalizar?',
    a: 'La sublimación es un proceso que transfiere tinta al material con calor, logrando colores vivos y duraderos que no se pelan ni se sienten. Se usa en tazas, termos, playeras de poliéster, mousepads, fundas, llaveros y más.',
  },
  {
    q: '¿Qué es el DTF y en qué se diferencia de la sublimación?',
    a: 'DTF (Direct to Film) imprime el diseño en una película que se plancha sobre la prenda. Funciona en algodón, mezclas, gorras, sudaderas y telas oscuras, donde la sublimación no se ve bien. También vendemos transfers DTF listos para planchar.',
  },
  {
    q: '¿Cuánto cuesta y cuánto tarda mi pedido?',
    a: 'El precio depende del producto, el tamaño del diseño y la cantidad. Escríbenos por WhatsApp con tu idea y te cotizamos sin compromiso. Los tiempos habituales son de 2 a 5 días hábiles según la carga de trabajo.',
  },
  {
    q: '¿Hacen pedidos al mayoreo o para eventos?',
    a: 'Sí. Hacemos paquetes para bodas, cumpleaños, empresas y emprendedores, con precio especial por volumen.',
  },
  {
    q: '¿Tengo que llevar mi propio diseño?',
    a: 'No es necesario. Puedes enviarnos tu diseño o nosotros lo creamos contigo a partir de tu idea, nombre, foto o logotipo.',
  },
  {
    q: '¿Hacen envíos?',
    a: 'Sí, enviamos a todo México. También puedes recoger tu pedido en nuestra zona.', // TODO confirmar
  },
];

export const PRODUCTS = [
  { icon: '☕', title: 'Tazas', text: 'Cerámica sublimada, mágicas y de colores.', tag: 'Sublimación' },
  { icon: '🥤', title: 'Termos y vasos', text: 'Acero inoxidable con tu diseño o nombre.', tag: 'Sublimación' },
  { icon: '👕', title: 'Playeras y sudaderas', text: 'Para ti, tu equipo o tu negocio.', tag: 'DTF' },
  { icon: '🧢', title: 'Gorras y totebags', text: 'Detalles que se ven y se quedan.', tag: 'DTF' },
  { icon: '🎞️', title: 'Transfers DTF', text: 'Impresión en película lista para planchar.', tag: 'DTF' },
  { icon: '🎁', title: 'Regalos y eventos', text: 'Paquetes para bodas, cumples y empresas.', tag: 'Ambos' },
];
