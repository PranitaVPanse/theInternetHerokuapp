const {Given, When, Then, And, Before, BeforeAll, After, AfterAll} = require('@cucumber/cucumber')
const { ABTestingPage } = require('../pageObject/POManager')
const playwright = require("playwright")

let pageObject;

When('the user clicks on Challenging DOM link', async function () {
    pageObject = new ABTestingPage(global.page);
    await pageObject.challengingDOMLink()
  });

Then('User should be able to collect answer from the canvas', async function () {
        pageObject = new ABTestingPage(global.page);
        await pageObject.firstButton()
        await pageObject.getAnswerFromCanvas()
});
