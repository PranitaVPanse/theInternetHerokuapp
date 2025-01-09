const {Given, When, Then, Before, BeforeAll, After, AfterAll} = require('@cucumber/cucumber')
const { ABTestingPage } = require('../pageObject/POManager')
const playwright = require("playwright")

let pageObject;
pageObject = new ABTestingPage(global.page);

// BeforeAll(async() => {
//     console.log("Launch Browser")
//     global.browser = await playwright["chromium"].launch({headless: false})
// })

// Before(async () => {
//     console.log("Create new context page")
//     global.context = await global.browser.newContext()
//     global.page = await global.context.newPage()
//     pageObject = new ABTestingPage(global.page);
// });


// Given('the user navigated to the homepage', async function () {
//             await pageObject.navigatetoHomePage()
//     });
       
When('the user clicks on AB testing link', async function () {
            await pageObject.clickonabtesting()
    });

Then('the user should be navigated to abtest page', async function () {
          await pageObject.abtestingpage()
    });

Then('title should be visible', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
    });

// AfterAll(async () => {
//     console.log("Close Browser")
//     await global.browser.close()
//     });


                                