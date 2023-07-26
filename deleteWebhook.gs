/**
 * Deletes the webhook by sending a request to the Telegram API.
 *
 * @param {string} telegramUrl - The base URL of the Telegram API.
 * @param {string} webAppUrl - The URL of the webhook to be deleted.
 * @return {undefined} This function does not return a value.
 */

function deleteWebhook() {
  let url = telegramUrl + "/deleteWebhook?url=" + webAppUrl;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}