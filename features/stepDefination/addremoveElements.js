const {Given, When, Then, And, Before, BeforeAll, After, AfterAll} = require('@cucumber/cucumber')
const { ABTestingPage } = require('../pageObject/POManager')
const playwright = require("playwright")

let pageObject;
Given('the user navigated to the homepage', async function () {
  pageObject = new ABTestingPage(global.page);
    await pageObject.navigatetoHomePage()
});

When('the user clicks on AddRemove Elements link', async function () {
            pageObject = new ABTestingPage(global.page);
           await pageObject.clickonadremoveElements()
         });

When('the user clicks on Add Element button', async function () {
           pageObject = new ABTestingPage(global.page);
           await pageObject.clickonAdd()
         });

Then('Delete button should be visible to the user', async function () {
           pageObject = new ABTestingPage(global.page);
           await pageObject.deleteIsVisible()
         });

When('the user clicks on Delete Element button', async function () {
           pageObject = new ABTestingPage(global.page);
           await pageObject.clickonDelete()
           });