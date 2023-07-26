/**
 * Handles the doPost event in the Google Apps Script environment.
 *
 * @param {Object} e - The event object containing the POST request data.
 * @returns {void} This function does not return anything.
 */
function doPost(e) {
  const contents = JSON.parse(e.postData.contents);

  if (contents.message) {

    const chatId = contents.message.from.id;
    const message = '<code>⚠ chose the BA-A-A-ND ⚠</code>';
    sendKeyboardBands(chatId, message, keyboardBand);

  } else if (contents.callback_query) {

    const cbData = contents.callback_query.data;
    const chatIdCb = contents.callback_query.from.id;

    const sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet2');
    const sheet2Range = sheet2.getRange(1, 1, sheet2.getLastRow(), sheet2.getLastColumn());
    const sheet2Values = sheet2Range.getValues();

    let groupName;
    let answer = '';

    for (let i = 0; i < sheet2Values.length; i++) {
      groupName = `${sheet2Values[i][0]}`;

      if (cbData === groupName.toLowerCase()) {
        answer = `ok - ${sheet2Values[i][0]}`;
      }
    }
    sendMessage(chatIdCb, answer);
  }

  const cbData = contents.callback_query.data;
  const chatIdCb = contents.callback_query.from.id;

  if (cbData === 'radiohead') {
    const answerAlbom = 'chose the ALBOM';
    const row = [cbData];

    sendKeyboardAlbomR(chatIdCb, answerAlbom, keyboardRadiohead);
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1').appendRow(row);

  } else if (cbData === 'n. cave') {
    const answerAlbom = 'chose the ALBOM';
    const row = [cbData];

    sendKeyboardAlbomC(chatIdCb, answerAlbom, keyboardCave);
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1').appendRow(row);
  }
}
