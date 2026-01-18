const {remote} = require ('webdriverio')
 
async function runTest(){
 
    const browser =  await remote({
    automationProtocol: 'webdriver',
    logLevel:'silent',
    capabilities:{
        browserName:'chrome'
    }
});
 
await browser.url("https://www.saucedemo.com/")
await browser.pause(6000);
await browser.$('//input[@name="user-name"]').setValue("standard_user")
await browser.pause(6000);
await browser.$('//input[@name="password"]').setValue("secret_sauce")
await browser.pause(6000);
await browser.$('//input[@name="login-button"]').click()
await browser.pause(6000);
}
 
 
runTest();