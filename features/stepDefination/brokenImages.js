const {Given, When, Then, And, Before, BeforeAll, After, AfterAll} = require('@cucumber/cucumber')
const { ABTestingPage } = require('../pageObject/POManager')
const playwright = require("playwright")

let pageObject;

When('the user clicks on Broken Images link', async function () {
                pageObject = new ABTestingPage(global.page);
                await pageObject.brokenImages()
         });

Then('two broken and one complete images should be visible to the user', async function () {
                pageObject = new ABTestingPage(global.page);
                await pageObject.validateBrokenImages()
         });