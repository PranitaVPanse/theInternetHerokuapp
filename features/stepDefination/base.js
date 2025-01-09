const { BeforeAll, Before, AfterAll} = require('@cucumber/cucumber')
const { ABTestingPage } = require('../pageObject/POManager')
//import { chromium } from 'playwright';
const playwright = require("playwright")


BeforeAll(async() => {
    console.log("Launch Browser base")
    global.browser = await playwright["chromium"].launch({headless: false})
})

Before(async () => {
    console.log("Create new context page base")
    global.context = await global.browser.newContext()
    global.page = await global.context.newPage()
    //pageObject = new ABTestingPage(global.page);
    //pageObject = new ABTestingPage(global.page);
});

// AfterAll(async () => {
//     console.log("Close Browser base")
//     await global.browser.close()
//     });