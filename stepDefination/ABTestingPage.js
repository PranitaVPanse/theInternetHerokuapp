const {Given, When, Then, And} = require('@cucumber/cucumber')
const { HomePage } = require("../features/pageObject/home-page.js")

const homePage = new HomePage()

Given('the user navigated to the homepage', async function () {
            await homePage.navigatetoHomePage()
    });
       
When('the user clicks on AB testing link', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
    });

Then('the user should be navigated to abtest page', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
    });

Then('title should be visible', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
    });
