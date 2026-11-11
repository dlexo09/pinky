/**
 * Pinky Prints - registro de leads en Google Sheets.
 * Pegar en Extensiones > Apps Script de la hoja. Ver docs/LEADS.md
 */
const COLUMNS = ['fecha', 'tipo', 'nombre', 'producto', 'cantidad', 'idea', 'ref', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'pagina', 'estado'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const d = JSON.parse(e.postData.contents || '{}');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
    // Limita el largo y evita que un texto se interprete como fórmula
    const clean = (v) => String(v == null ? '' : v).slice(0, 500).replace(/^[=+\-@]/, "'$&");
    const row = COLUMNS.map((c) => {
      if (c === 'fecha') return Utilities.formatDate(new Date(), 'America/Mexico_City', 'yyyy-MM-dd HH:mm');
      if (c === 'estado') return d.tipo === 'formulario' ? 'Nuevo' : '';
      return clean(d[c]);
    });
    sheet.appendRow(row);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error');
  } finally {
    lock.releaseLock();
  }
}
