/**
 * Sends a message to a specified chat.
 *
 * @param {number} chat_id - The ID of the chat.
 * @param {string} text - The text of the message.
 * @return {void} This function does not return a value.
 */

function sendMessage(chat_id, text) {
  let url = telegramUrl + "/sendMessage?chat_id=" + chat_id + "&text=" + text;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}


