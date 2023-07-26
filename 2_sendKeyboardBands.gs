/**
 * Sends a message with a custom keyboard band to a specified chat ID.
 *
 * @param {number} chatId - The ID of the chat where the message will be sent.
 * @param {string} text - The text of the message.
 * @param {object} keyboardBand - The custom keyboard band to be included in the message.
 * @return {undefined} This function does not return anything.
 */

function sendKeyboardBands(chatId, text, keyboardBand) {
  let data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatId),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyboardBand)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}
