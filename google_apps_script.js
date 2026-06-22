// ============================================================
// INSTRUCCIONES:
// 1. Ve a https://script.google.com y crea un nuevo proyecto
// 2. Pega este codigo completo en el editor
// 3. Click en "Implementar" > "Nueva implementacion"
// 4. Tipo: "Aplicacion web"
// 5. Ejecutar como: "Yo" (tu cuenta)
// 6. Acceso: "Cualquier persona"
// 7. Click en "Implementar" y copia la URL generada
// 8. Pega esa URL en el index.html donde dice APPS_SCRIPT_URL
// ============================================================

const SHEET_NAME = 'Respuestas';

const HEADERS = [
  'timestamp',
  'rama',
  'q1_vio_qr',
  'q2_razon',
  'q3_complicado',
  'q4_confianza',
  'q5_habito',
  'q6_costo',
  'qn2_como_pago',
  'qn3_por_que_no_vio',
  'qn4_usaria_qr',
  'qn5_que_falta',
  'percepcion_general',
  'comentario_final'
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    }

    const row = HEADERS.map(h => data[h] || '');
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Webhook activo')
    .setMimeType(ContentService.MimeType.TEXT);
}
