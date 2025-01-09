const playwright = require("playwright")
const { Before, After, BeforeAll, AfterAll } = require("@cucumber/cucumber")


BeforeAll(async() => {
    console.log("Launch Browser")
    global.browser = await playwright["chromium"].launch({headless: false})
})

Before(async () => {
    console.log("Create new context page")
    global.context = await global.browser.newContext()
  })
