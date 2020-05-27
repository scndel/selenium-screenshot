const {Builder, By, Key, until} = require('selenium-webdriver');
const util = require('util');
const fs = require('fs');

const FILENAME = 'screenshot.png'
const URL_HUB = process.env.URL_HUB;
const URL_TEST= process.env.URL_TEST;

const writeFile = util.promisify(fs.writeFile)

async function takeScreenshot() {

let driver = await new Builder().forBrowser('chrome').usingServer(URL_HUB).build();

await driver.get(URL_TEST);

let image = await driver.takeScreenshot();

await writeFile(FILENAME, image, 'base64');

await driver.quit();

}
takeScreenshot()