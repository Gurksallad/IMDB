let { $, sleep } = require('./funcs');

module.exports = function () {



  /*
    
    this.When(/^I click the search button$/, async function () {
      let button = await $('div.tfB0Bf:nth-child(7) > center:nth-child(2) > input:nth-child(1)')
      button.click()
      await sleep(4000)
    });
  
    this.Then(/^the first test result should contain the word "([^"]*)"$/, async function (searchString) {
      let results = await $('h3')
      let found = false
      for(let result of results){
        console.log('text', await result.getText())
        let text = await result.getText()
        if( text.toLowerCase().includes( searchString.toLowerCase() ) ){
          found = true
          break
        }
      }
  
      assert(found, 'expected to find ' + searchString)
  
    });
  */
  let searchField
  let sleepTime = 2000
  let regEmail

  this.Given(/^That I’m on the platform IMDb\.com$/, async function () {
    await helpers.loadPage('https://imdb.com');
    await sleep(1000)
    searchField = await $('#home_img_holder')
    assert.instanceOf(searchField, searchField.constructor, "Expected a web element")

  });

  this.When(/^i press the button sign in$/, async function () {
    let signIn = await $('.imdb-header__signin-text')
    signIn.click()
    await sleep(sleepTime)
  });

  this.When(/^press the button Create a New Account$/, async function () {
    let createButton = await $('#signin-options > div > div:nth-child(4) > a')
    createButton.click()
    await sleep(sleepTime)
  });

  this.When(/^I enter my name "([^"]*)"$/, async function (name) {
    let nameBox = await $('#ap_customer_name')
    await nameBox.sendKeys(name)
    await sleep(sleepTime)
  });




  this.When(/^I enter a email adress$/, async function () {
    let emailInput = await $('#ap_email')
    // We can use create multiple "emails" that go to the same gmail account
    // using the plus sign see:
    // http://www.codestore.net/store.nsf/unid/BLOG-20111201-0411
    regEmail = 'bertil.bertilsdotter+' + Date.now() + '@gmail.com';
    console.log("USING THE FOLLOWING EMAIL FOR REGISTRATION ", regEmail)
    await emailInput.sendKeys(regEmail)
    await sleep(sleepTime)
  });



  this.When(/^I type in a password "([^"]*)"$/, async function (password) {
    let passwordInput = await $('#ap_password')
    await passwordInput.sendKeys(password)
    await sleep(sleepTime)
  });




  this.When(/^I re\-enter the same password "([^"]*)"$/, async function (reEnterPassword) {
    let reEnterPasswordInput = await $('#ap_password_check')
    await reEnterPasswordInput.sendKeys(reEnterPassword)
    await sleep(sleepTime)
  });



  this.When(/^I press Create your IMDb account$/, async function () {
    let continueButton = await $('#continue')
    continueButton.click()
    await sleep(sleepTime)
  });


  this.Then(/^I should be automatically logged in to my account with the name "([^"]*)"$/, async function (name) {
    // Grab the label element where the user name is shown
    let loggedInLabel = await $('label[for="navUserMenu"] .ipc-button__text')
    // Get the text inisde the label
    let textInLabel = await loggedInLabel.getText();
    // Compare the text from the label with the name we registrered as
    assert.strictEqual(textInLabel, name, 'Not logged in with the name "' + name + '"');
  });


}

