/**
 * Sets the webhook for the Telegram bot to the specified URL.
 *
 * @param {string} telegramUrl - The base URL for the Telegram API.
 * @param {string} webAppUrl - The URL of the web application where the bot is hosted.
 * @return {void} This function does not return a value.
 */

function setWebhook() {
  let url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  let response = UrlFetchApp.fetch(url);
  console.log(response.getContentText());
}
