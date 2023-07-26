/**
 * Sends a message with a custom keyboard to a specified chat on Telegram API.
 *
 * @param {string|number} chatId - The ID of the chat to send the message to.
 * @param {string} text - The text of the message to send.
 * @param {object} keyboardCave - The custom keyboard object to include with the message.
 * @return {void} This function does not return a value.
 */

function sendKeyboardAlbomC(chatId, text, keyboardCave) {
  let data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatId),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyboardCave)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}
