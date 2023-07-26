/**
 * Sends a message with a custom keyboard to a Telegram chat.
 *
 * @param {string} chatId - The ID of the chat to send the message to.
 * @param {string} text - The text of the message.
 * @param {Object} keyboardRadiohead - The custom keyboard object.
 * @return {void} This function does not return anything.
 */

function sendKeyboardAlbomR(chatId, text, keyboardRadiohead) {
  let data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatId),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyboardRadiohead),
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);  
}