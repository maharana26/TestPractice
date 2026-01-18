const {remote} = require ('webdriverio')
 
async function runTest(){
 
    const browser =  await remote({
    automationProtocol: 'webdriver',
    logLevel:'silent',
    capabilities:{
        browserName:'chrome'
    }
});
 
await browser.url("https://practicetestautomation.com/practice-test-login/")
await browser.pause(2000);
await browser.$("//input[@id='username']").setValue("student")
await browser.pause(2000);
await browser.$("//input[@id='password']").setValue("Password123")
await browser.pause(2000);
await browser.$("//button[@id='submit']").click()
await browser.pause(2000);
}
 
 
runTest();