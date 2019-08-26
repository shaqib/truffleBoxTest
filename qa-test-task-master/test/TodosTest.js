const Todos = artifacts.require("./Todos.sol");
require('chromedriver');
const assert = require('assert');
const {Builder, Key, By, until} = require('selenium-webdriver');
const fromAscii = payload => web3.fromAscii ? web3.fromAscii(payload) : web3.utils.utf8ToHex(payload);
const toAscii = payload => web3.toAscii ? web3.toAscii(payload) : web3.utils.hexToUtf8(payload);

contract('Todos', function() {
	let driver;

// Function to decode Base64 of chrome
const fs = require('fs');
function encode(file) {
  var stream = fs.readFileSync(file);
  return new Buffer.from(stream).toString('base64');
}

    before(async function() {
	var chrome = require('selenium-webdriver/chrome');
	var path = require('path'); 
	// instantiate and load Metamsk chrome extension 
    var co = new chrome.Options();
    co.addExtensions(encode(path.resolve( __dirname, process.cwd()+'/7.0.1_0.crx')));
    driver = await new Builder().forBrowser('chrome').setChromeOptions(co).build();
    });
	
  it("can add and retrieve todo", async function() {
    const todos = await Todos.new();
    // browse Metamsk chrome extension
    await driver.get('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html');
        // Maximise the browser window
    await driver.manage().window().maximize();
    // Navigate to Metamask Login page
    await driver.findElement(By.css('#app-content > div > div.main-container-wrapper > div > div > div > button')).click();
    await driver.findElement(By.xpath('//button[text()="Import Wallet"]')).click();
    await driver.findElement(By.xpath('//button[text()="I agree"]')).click();

    // Enter the seed phrase and the password to get the Metamask account(here, I am using my Metamask account)
    await driver.wait(until.elementLocated(By.xpath('//textarea[@class="first-time-flow__textarea"]')), 10000);
    await driver.findElement(By.xpath('//textarea[@class="first-time-flow__textarea"]')).sendKeys('seed lamp citizen sniff neglect clarify miracle you ripple cruise peasant float');
    await driver.findElement(By.id('password')).sendKeys('Admin@123');
    await driver.findElement(By.id('confirm-password')).sendKeys('Admin@123');
    await driver.findElement(By.xpath('//div[@class="first-time-flow__checkbox"]')).click();
    await driver.findElement(By.xpath('//button[text()="Import"]')).click();
    await driver.wait(until.elementLocated(By.xpath('//button[text()="All Done"]')), 10000);
    await driver.findElement(By.xpath('//button[text()="All Done"]')).click();

    // Switch to Localhost 8545 network in Metamask
    await driver.wait(until.elementLocated(By.xpath('//div[@class="network-name"]')), 10000);
    await driver.findElement(By.xpath('//div[@class="network-name"]')).click();
    await driver.wait(until.elementLocated(By.xpath('//span[text()="Localhost 8545"]')), 10000);
    await driver.findElement(By.xpath('//span[text()="Localhost 8545"]')).click();


    // Navigate to http://localhost:3000/ in a new tab
    await driver.executeScript('window.open("http://localhost:3000/");');

// Wait for Tab to open
var sleep = require('sleep');
sleep.sleep(10); // sleep for ten seconds

// Switch to Truffle Window
driver.getWindowHandle().then(function (mainWindowHandle) {
    console.log ('Main window handle is ' + mainWindowHandle);
    driver.switchTo().window(mainWindowHandle);
});
 driver.getAllWindowHandles().then(function gotWindowHandles(allhandles) {
	console.log ('Main window length is ' + allhandles.length);
    driver.switchTo().window(allhandles[allhandles.length -1]);
    
});
 //   await driver.findElement(By.xpath('//button[text()="Share Address"]')).click();
var sleep = require('sleep');
sleep.sleep(10); //
    let title = await driver.getTitle();
    // Input Value in Truffle Box
    let addValue = '2';
    await driver.findElement(By.id('textarea')).sendKeys(addValue);
    // Click Add Todo
    await driver.findElement(By.xpath('//button[text()="Add Todo"]')).click();
var sleep = require('sleep');

// Switch Metask tab to Sign transaction and Mine
 driver.getAllWindowHandles().then(function gotWindowHandles(allhandles) {
	console.log ('Main window length is ' + allhandles.length);
    driver.switchTo().window(allhandles[allhandles.length -4]);
    
});
console.log(driver.getTitle());
sleep.sleep(10);
    //Sign the transaction and Mine
    await driver.wait(until.elementLocated(By.xpath('//div[@class="network-name"]')), 10000);
    await driver.findElement(By.xpath('//div[@class="network-name"]')).click();
    await driver.findElement(By.xpath('//div[@class="transaction-list-item"]')).click();
    await driver.findElement(By.xpath('//button[text()="Confirm"]')).click();

// Switch back to Truffle to verify the Add Todo is created
 driver.getAllWindowHandles().then(function gotWindowHandles(allhandles) {
	console.log ('Main window length is ' + allhandles.length);
    driver.switchTo().window(allhandles[allhandles.length -2]);
    
});
console.log(driver.getTitle());
sleep.sleep(10);

    // Verify the remove Todo button is added
    await driver.wait(until.elementLocated(By.xpath('//div[@class="pure-u-1-1"]//ul/li')), 10000);
    const searchInputEnableFlag = await driver.findElement(By.xpath('//button[text()="Remove Todo"]')).isEnabled();
    assert.equal(searchInputEnableFlag, true);

    // Verify the the input value
    let addedValue = driver.findElement(By.xpath('//div[@class="pure-u-1-1"]//ul/li')).getText();
    assert.equal(addValue, addedValue);
    
    // Refresh the Page
    await driver.navigate().refresh();   
    // Verify the the input value after page refresh
    let addedValue1 = driver.findElement(By.xpath('//div[@class="pure-u-1-1"]//ul/li')).getText();
    assert.equal(addValue, addedValue1);
  });

  it("can remove todo", async function() {
    const todos = await Todos.new();
    // Click the Remove Todo
    await driver.findElement(By.xpath('//button[text()="Remove Todo"]')).click();

// Switch Metask tab to Sign transaction and Mine
 driver.getAllWindowHandles().then(function gotWindowHandles(allhandles) {
	console.log ('Main window length is ' + allhandles.length);
    driver.switchTo().window(allhandles[allhandles.length -4]);
    
});
console.log(driver.getTitle());
var sleep = require('sleep');
sleep.sleep(10);
    //Sign the transaction and Mine
    await driver.wait(until.elementLocated(By.xpath('//div[@class="network-name"]')), 10000);
    await driver.findElement(By.xpath('//div[@class="network-name"]')).click();
    await driver.findElement(By.xpath('//div[@class="transaction-list-item"]')).click();
    await driver.findElement(By.xpath('//button[text()="Confirm"]')).click();
 driver.getAllWindowHandles().then(function gotWindowHandles(allhandles) {
	console.log ('Main window length is ' + allhandles.length);
    driver.switchTo().window(allhandles[allhandles.length -2]);
    
});
console.log(driver.getTitle());
sleep.sleep(10);
    // Verify the remove Todo button is removed
    const searchInputEnableFlag = await driver.findElement(By.xpath('//button[text()="Remove Todo"]')).isEnabled();
    assert.equal(searchInputEnableFlag, false);
  });
});
