const {Given, When, Then, And, Before, BeforeAll, After, AfterAll} = require('@cucumber/cucumber'); 
const { ABTestingPage } = require('../pageObject/POManager')
const playwright = require("playwright");

let pageObject;

When('the user clicks on Checkboxes link', async function () {
            pageObject = new ABTestingPage(global.page);
            await pageObject.checkBoxesLink()
})

Then('the user should be able to check {string}', { timeout: 10000 }, async function (checkboxNumber){
            pageObject = new ABTestingPage(global.page);

            if(checkboxNumber = "1"){
                await pageObject.checkBox1()
            } else{
                await pageObject.checkBox2()
            }
});
