const {Builder, By, Key, until} = require('selenium-webdriver');

async function takeScreenshot(url_hub,url_test) {

let driver = await new Builder().forBrowser('chrome').usingServer(url_hub).build();

await driver.get(url_test);

let image = await driver.takeScreenshot();

await driver.quit();

return image;
}

exports.takeScreenshot = takeScreenshot;