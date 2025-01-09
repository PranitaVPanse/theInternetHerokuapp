const { test, expect } = require('@playwright/test');
const playwright = require("playwright")


class ABTestingPage{
    constructor(page) {
        this.page = page;
      }

    async navigatetoHomePage(){
        await this.page.goto("https://the-internet.herokuapp.com/");
    }

    async clickonabtesting(){
        const abtestingbutton = this.page.locator('[href="/abtest"]')
        await abtestingbutton.click();
    }

    async abtestingpage(){
        console.log("Title : ", await this.page.title());
        const title = await this.page.title()
        expect(title).toBe("The Internet")
    }

    //Add/Remove Elements Page
    
    async clickonadremoveElements(){
        const addremoveElements = this.page.locator('[href="/add_remove_elements/"]')
        addremoveElements.click();
      }

      async clickonAdd(){
        const addButton = this.page.getByText("Add Element")
        addButton.click()
      }

      async deleteIsVisible(){
       await expect(page.locator(".added-manually")).toBeVisible()
      }

      async clickonDelete(){
        const clickonDelete = this.page.locator(".added-manually")
        clickonDelete.click();
      }

      //Broken Images
      async brokenImages(){
          const clickonBrokenImages = this.page.getByText("Broken Images")
          clickonBrokenImages.click();
      }

      async validateBrokenImages(){

         // Check if this.page is initialized
        if (!this.page) {
          console.error("Page is not initialized");
          return;
        }        

        await this.page.waitForLoadState('domcontentloaded'); 
        await this.page.waitForSelector('.example img');

        try{
        //evalute is used as page.document cannot be accessed diretly by playwright as it is part of puppeteer, page.document is used to get all the 'img' from the page
           const brokenImages = await this.page.evaluate(async() => {

              const imgArr = Array.from(document.querySelectorAll('.example img'));
              const brokenImgList = [];
              const unbrokenImgList = [];

              for(const img of imgArr){

                // 1. fetch(img.src): Sends a request to the URL specified in img.src.
                // 2. {method: 'HEAD'}: Specifies the request method as HEAD, which retrieves only the HTTP headers (not the full response body).
                // 3. await: Waits for the promise to resolve or reject.
                // 4. .catch(() => null): Catches any errors that occur during the request and returns null instead of throwing an error.

                const response = await fetch(img.src, {method : 'HEAD'}). catch(() => null);

                if(!response || response.status !== 200){
                  brokenImgList.push(img.src)
                 } else{
                  //unbrokenImgList.push(img.src)
                  unbrokenImgList.push(img.src)
                }
              }
              //return imgArr.map(img => img.src);                 // Example logic to return image sources
              return {brokenImgList, unbrokenImgList}
          });
        
          console.log("List of broken and unbroken images:", brokenImages);
          console.log("Broken Images Validation ended")
          } catch  (error) {
           console.error("Error inside evaluate:", error);
          }    
        }
  
      //Challenging DOM Page
        async challengingDOMLink(){
          const challengingDOMLink = this.page.getByText("Challenging DOM");
          challengingDOMLink.click()

        }

        async firstButton(){
          const clickOnFirstButton = await this.page.locator('.button').first();
          const name = await clickOnFirstButton.textContent();
          console.log(name)
          clickOnFirstButton.click() 
        }

        async getAnswerFromCanvas(){
          const canvasAns = await this.page.evaluate(async() => {
            const scripts = Array.from(document.querySelector('script'));

            let answer = '';
            const scriptContents = '';

            for( const i of scripts){
                  scriptContents = i.innerHTML;

                  if(scriptContents.includes('canvas.strokeText')){
                      //extract the answer
                      const startIndex = scriptContents.indexOf('Ans');
                      const endIndex = scriptContents.indexOf(":", startIndex);
                      answer = scriptContents.substring(startIndex, endIndex);
                      break;
                  }
            }
            return scriptContents;
        });

        console.log("Answer is:" , canvasAns)
        }

        //CheckBoxes Page

        async checkBoxesLink(){
          const checkBoxesLink = await this.page.getByText('Checkboxes')
          await checkBoxesLink.click() 
        }

        async checkBox1(){
          // Get the first checkbox and click it
          const checkbox1 = await this.page.locator('//input[@type="checkbox"]').first();
          await checkbox1.click(); // Ensure the click is awaited
  
          // Assert that the checkbox is checked after clicking (if necessary)
          const isChecked = await checkbox1.isChecked(); // Check the state of the checkbox
          console.log(`Checkbox1 is checked: ${isChecked}`);
        }

        async checkBox2(){
          // Get the first checkbox and click it
          const checkbox2 = await this.page.locator('//input[@type="checkbox"]').last();
          await checkbox2.click(); // Ensure the click is awaited
  
          // Assert that the checkbox is checked after clicking (if necessary)
          const isChecked = await checkbox2.isChecked(); // Check the state of the checkbox
          console.log(`Checkbox 2 is checked: ${isChecked}`);
        }

        

}
module.exports = { 
  ABTestingPage,
  default: {
    timeout: 100000 // Set global timeout to 60 seconds
  }
}
