let { $, sleep } = require('./funcs');

module.exports = function () {

  //Feature Sökfunktion/Kategorier background
  let searchField
  let sleepTime = 2000;
  let regEmail

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

  this.When(/^I enter "([^"]*)" in the searchfield$/, async function (searchText) {
    searchField = await $('#suggestion-search');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    await sleep(sleepTime);
  });

  this.Then(/^I should see results based on my search$/, async function () {
    let findResultOfSearch = await $('#findSubHeader')
    assert.instanceOf(findResultOfSearch, findResultOfSearch.constructor, "Expected a web element")
    await sleep(sleepTime)
  });



  this.When(/^i press the button sign in$/, async function () {
    let signIn = await $('.imdb-header__signin-text')
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

  this.When(/^I enter my name "([^"]*)"$/, async function (name) {
    let nameBox = await $('#ap_customer_name')
    await nameBox.sendKeys(name)
    await sleep(sleepTime)
    assert.instanceOf(nameBox, nameBox.constructor, "could not enter name");

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



  this.When(/^I type in a password "([^"]*)"$/, async function (password) {
    let passwordInput = await $('#ap_password')
    await passwordInput.sendKeys(password)
    assert.instanceOf(passwordInput, passwordInput.constructor, "could not enter password");

    await sleep(sleepTime)
  });




  this.When(/^I re\-enter the same password "([^"]*)"$/, async function (reEnterPassword) {
    let reEnterPasswordInput = await $('#ap_password_check')
    await reEnterPasswordInput.sendKeys(reEnterPassword)
    assert.instanceOf(reEnterPasswordInput, reEnterPasswordInput.constructor, "could not enter password");

    await sleep(sleepTime)
  });



  this.When(/^I press Create your IMDb account$/, async function () {
    let continueButton = await $('#continue')
    continueButton.click()
    assert(continueButton, "can not find Create your IMDb account button");
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





