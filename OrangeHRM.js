const {remote} = require ('webdriverio')
 
async function runTest(){
 
    const browser =  await remote({
    automationProtocol: 'webdriver',
    logLevel:'silent',
    capabilities:{
        browserName:'chrome'
    }
});
 
await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await browser.pause(2000);
await browser.$("//input[@placeholder='Username']").setValue("Admin")
await browser.pause(2000);
await browser.$("//input[@placeholder='Password']").setValue("admin123")
await browser.pause(2000);
await browser.$("//button[@type='submit']").click()
await browser.pause(2000);
}
 
 
runTest();