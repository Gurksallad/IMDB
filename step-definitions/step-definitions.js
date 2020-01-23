let { $, sleep } = require('./funcs');

module.exports = function () {

  //Feature Sökfunktion/Kategorier background
  let searchField
  let sleepTime = 2000;
  let regEmail
  let password
  let name
  let faultyPassword

  /*this.Given(/^That I’m on the platform IMDb.com$/, async function () {
    await helpers.loadPage('https://imdb.com');
    await sleep(sleepTime)
    searchField = await $('#suggestion-search')
    assert.instanceOf(searchField, searchField.constructor, "Expected a web element")
  });
*/
  this.Given(/^That I’m on the platform IMDb\.com$/, async function () {
    await helpers.loadPage('https://imdb.com');
    await sleep(1000)
    searchField = await $('#home_img_holder')
    assert.instanceOf(searchField, searchField.constructor, "Expected a web element")

  });
  this.When(/^I enter the title "([^"]*)"$/, async function (searchText) {
    searchField = await $('#suggestion-search');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    await sleep(sleepTime);
  });

  this.When(/^I press the categories button titles$/, async function () {
    let categoriesButton = await $('.search-category-selector')
    await categoriesButton.click();
    await sleep(sleepTime);
    let titlesButton = await $('#navbar-search-category-select-contents > ul > a:nth-child(2)')
    await titlesButton.click();
  });

  this.When(/^I press the search button$/, async function () {
    let searchButton = await $('#suggestion-search-button > svg');
    assert(searchButton, 'Can not find the search button on the page');
    await searchButton.click();

  });

  this.Then(/^I should see the search results based on the title "([^"]*)"$/, async function (title) {
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    // now the search has finisehd
    let results = await $('.findResult');
    assert(results, 'Could not find any results');
    let firstResult = results[0];
    let resultText = await firstResult.getText();
    assert.include(resultText, title, 'Could not find the phrase ' + title + ' in the first search result.');
    await sleep(sleepTime);
  });


  

  this.When(/^i press the button sign in$/, async function () {
    let signIn = await driver.findElement(by.linkText("Sign In"))
    signIn.click()
    assert(signIn, "can not find sign in button");

    await sleep(sleepTime)
  });

  this.When(/^press the button Create a New Account$/, async function () {
    let createButton = await $('#signin-options > div > div:nth-child(4) > a')
    createButton.click()
    assert(createButton, "can not find sign in button");
    await sleep(sleepTime)

  });

  this.When(/^I enter my name$/, async function () {
    let nameBox = await $('#ap_customer_name')
    name = 'hejimdbitsmeagain'
    await nameBox.sendKeys(name)
    assert.instanceOf(nameBox, nameBox.constructor, "could not enter name");
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
    assert.instanceOf(emailInput, emailInput.constructor, "could not enter email");

    await sleep(sleepTime)
  });



  this.When(/^I type in a password$/, async function () {
    let passwordInput = await $('#ap_password')
     password = 'bertilärbäst'
    await passwordInput.sendKeys(password)
    assert.instanceOf(passwordInput, passwordInput.constructor, "could not enter password");

    await sleep(sleepTime)
  });




  this.When(/^I re\-enter the same password$/, async function () {
    let reEnterPasswordInput = await $('#ap_password_check')
    await reEnterPasswordInput.sendKeys(password)
    assert.instanceOf(reEnterPasswordInput, reEnterPasswordInput.constructor, "could not enter password");

    await sleep(sleepTime)
  });


  this.When(/^I press Create your IMDb account$/, async function () {
    let continueButton = await $('#continue')
    continueButton.click()
    assert(continueButton, "can not find Create your IMDb account button");
    await sleep(sleepTime)
  });

  this.Then(/^I should be automatically logged in to my account$/, async function () {
    // Grab the label element where the user name is shown
    let loggedInLabel = await $('label[for="navUserMenu"] .ipc-button__text')
    // Get the text inisde the label
    let textInLabel = await loggedInLabel.getText(name);
    // Compare the text from the label with the name we registrered as
    assert.strictEqual(textInLabel, name, 'Not logged in with the name "' + name + '"');
    await sleep(sleepTime)

  });
  

  this.When(/^press the sign in with IMDb button$/, async function () {
    let signInButton = await driver.findElement(by.linkText("Sign in with IMDb"))
    signInButton.click()
    assert(signInButton, "can not find sign in with IMDb button");

      await sleep(sleepTime)
  });

  this.When(/^I enter my email$/, async function () {
    let myEmail = await $('#ap_email')
    await myEmail.sendKeys(regEmail)
    assert.instanceOf(myEmail, myEmail.constructor, "could not enter email");
    await sleep(sleepTime)

  });

  this.When(/^I enter my password$/, async function () {
    let myPassword = await $('#ap_password')
    await myPassword.sendKeys(password)
    assert.instanceOf(myPassword, myPassword.constructor, "could not enter password");
    await sleep(sleepTime)
  });

  this.When(/^I press the yellow sign in button$/, async function () {
    let yellowSignInButton = await $('#signInSubmit')
    yellowSignInButton.click()
    assert(yellowSignInButton, "can not find the yellow sign in button");
    await sleep(sleepTime)
  });
  
  this.Then(/^I should be logged in to my account$/, async function () {
    // Grab the label element where the user name is shown
    let logInLabel = await $('label[for="navUserMenu"] .ipc-button__text')
    // Get the text inisde the label
    let logInTextInLabel = await logInLabel.getText(name);
    // Compare the text from the label with the name we registrered as
    assert.strictEqual(logInTextInLabel, name, 'Not logged in with the name "' + name + '"');
    await sleep(sleepTime)
  });
*/

  
  this.When(/^I enter an unused email adress$/, async function () {
    let anotherEmailInput = await $('#ap_email')
    // We can use create multiple "emails" that go to the same gmail account
    // using the plus sign see:
    // http://www.codestore.net/store.nsf/unid/BLOG-20111201-0411
    let regAnotherEmail = 'bertil.bertilsdotter+' + Date.now() + '@gmail.com';
    console.log("USING THE FOLLOWING EMAIL FOR REGISTRATION ", regAnotherEmail)
    await anotherEmailInput.sendKeys(regAnotherEmail)
    assert.instanceOf(anotherEmailInput, anotherEmailInput.constructor, "could not enter email");

    await sleep(sleepTime)
  });

  
  this.When(/^I type in a faulty password$/, async function () {
    let passwordInputBox = await $('#ap_password')
     faultyPassword = 'bertil'
    await passwordInputBox.sendKeys(faultyPassword)
    assert.instanceOf(passwordInputBox, passwordInputBox.constructor, "could not enter password");

    await sleep(sleepTime)
  });


  this.When(/^I re\-enter the same faulty password$/, async function () {
    let reEnterPasswordInputBox = await $('#ap_password_check')
    await reEnterPasswordInputBox.sendKeys(faultyPassword)
    assert.instanceOf(reEnterPasswordInputBox, reEnterPasswordInputBox.constructor, "could not enter password");

    await sleep(sleepTime)
  });


  this.Then(/^I should get a warning box$/, async function () {
        // Grab the label element where the user name is shown
    let errorMessage = await $('#auth-error-message-box > div')
    assert.instanceOf(errorMessage, errorMessage.constructor, 'could not find error "');

    
    await sleep(sleepTime)
    
  });



}





