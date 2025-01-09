const {Given, When, Then, And, Before, BeforeAll, After, AfterAll} = require('@cucumber/cucumber')
const { ABTestingPage } = require('../pageObject/POManager')
const playwright = require("playwright")

let pageObject;

// BeforeAll(async() => {
//     console.log("Launch Browser1")
//     global.browser = await playwright["chromium"].launch({headless: false})
// })

// Before(async () => {
//   console.log("Create new context page 2")
//   global.context = await global.browser.newContext()
//   global.page = await global.context.newPage()
//   pageObject = new ABTestingPage(global.page);
// });

Given('the user navigated to the Basic Auth link using "<username"> and "<password>" credentials', async function () {
      pageObject = new ABTestingPage(global.page);
  });

Then('the user should be able to signin successfully', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('the user should not be able to signin successfully', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

Then('the user click on Cancel and Not authorized error is displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });
