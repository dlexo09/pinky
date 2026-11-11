# Seguimiento de leads (costo $0)

## 1. Crear la hoja y el script (5 min, con la cuenta de Google de Vania)
1. Google Sheets > hoja nueva "Pinky Prints - Leads".
2. Extensiones > Apps Script > pegar el contenido de `docs/apps-script-leads.gs` > Guardar.
3. Implementar > Nueva implementación > tipo **Aplicación web**.
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
4. Autorizar permisos y copiar la URL que termina en `/exec`.
5. Pegarla en `src/config.ts` -> `leadsEndpoint`. Rebuild y publicar.

## 2. Qué se guarda
- `formulario`: nombre, producto, cantidad, idea (lead completo).
- `clic_whatsapp`: alguien tocó un botón de WhatsApp (sin datos personales).
- Siempre: fecha, origen (`ref`), UTM y página. La columna `estado` (Nuevo / Cotizado / Anticipo / Entregado) se actualiza a mano.

## 3. Códigos de origen para anuncios
Usar URLs con UTM en cada anuncio o bio, por ejemplo:
`https://TUDOMINIO/?utm_source=ig&utm_medium=paid&utm_campaign=dia-muertos`
El mensaje de WhatsApp llegará con `(ref: ig-dia-muertos)`, así ella sabe de dónde vino cada chat.

## 4. Pixel y GA4
Pegar el ID en `metaPixelId` / `ga4Id` de `src/config.ts`. Los eventos `Lead` y `whatsapp_click` ya se disparan.

## 5. Opcional con Make (plan gratis)
Escenario: Google Sheets "Watch new rows" -> aviso por correo o Telegram. No es necesario para guardar leads.
