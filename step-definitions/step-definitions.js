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

  this.When(/^I enter the company "([^"]*)"$/, async function (searchText) {
    searchField = await $('#suggestion-search');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    await sleep(sleepTime);
  });

  this.When(/^I press the categories button companies$/, async function () {
    let categoriesButton = await $('.search-category-selector')
    await categoriesButton.click();
    await sleep(sleepTime);
    let companiesButton = await $('#navbar-search-category-select-contents > ul > a:nth-child(5)')
    await companiesButton.click();
  });

  this.When(/^I enter the name of "([^"]*)"$/, async function (searchText) {
    searchField = await $('#suggestion-search');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    await sleep(sleepTime);
  });

  this.When(/^I press the categories button celebrities$/, async function () {
    let categoriesButton = await $('.search-category-selector')
    await categoriesButton.click();
    await sleep(sleepTime);
    let titlesButton = await $('#navbar-search-category-select-contents > ul > a:nth-child(4)')
    await titlesButton.click();
  });

  this.Then(/^I should see the search results based on the name "([^"]*)"$/, async function (name) {
    await driver.wait(until.elementLocated(By.css('.findResult, .findNoResults')));
    // now the search has finisehd
    let results = await $('.findResult');
    assert(results, 'Could not find any results');
    let firstResult = results[0];
    let resultText = await firstResult.getText();
    assert.include(resultText, name, 'Could not find the phrase ' + name + ' in the first search result.');
    await sleep(sleepTime);
  });

  this.When(/^I enter the episode "([^"]*)"$/, async function (searchText) {
    searchField = await $('#suggestion-search');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    await sleep(sleepTime);
  });

  this.When(/^I press the categories button tv\-episodes$/, async function () {
    let categoriesButton = await $('.search-category-selector')
    await categoriesButton.click();
    await sleep(sleepTime);
    let episodesButton = await $('#navbar-search-category-select-contents > ul > a:nth-child(3)')
    await episodesButton.click();
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

  this.When(/^I reenter a not matching password$/, async function () {
    let reEnterFaultyPasswordInputBox = await $('#ap_password_check')
    await reEnterFaultyPasswordInputBox.sendKeys(faultyPassword)
    assert.instanceOf(reEnterFaultyPasswordInputBox, reEnterFaultyPasswordInputBox.constructor, "could not enter faulty password");

    await sleep(sleepTime)
  });



   
  
  
    //scenario watchlist add/remove start
    this.Given(/^that i am logged in$/, async function () {
      let button = await $('.imdb-header__signin-text')
      button.click()
      await driver.wait(until.elementLocated(By.css('.imdb-logo')))
      button = await $('.imdb-logo')
      button.click()
      await driver.wait(until.elementLocated(By.name('email')))
      driver.findElement(by.name("email")).click();
      driver.findElement(by.name("email")).sendKeys('jens.i.t.magnusson@hotmail.com')
      driver.findElement(by.name("password")).click()
      driver.findElement(by.name("password")).sendKeys('jheamobps5is')
      await driver.wait(until.elementLocated(By.id("signInSubmit")))
      button = driver.findElement(by.id("signInSubmit"))
      button.click()
      await driver.wait(until.elementLocated(By.css('.ipc-icon--account-circle')))
      let loggedInUserScreen = await $('.ipc-icon--account-circle')
      assert.instanceOf(loggedInUserScreen, loggedInUserScreen.constructor, "Expected a web element")
   

    await sleep(sleepTime)
  });

  



 




  this.When(/^i click on the watchlist$/, async function () {
    let watchListButton = await $('.sc-kpOJdX');
    watchListButton.click();
    await sleep(sleepTime);
    await driver.wait(until.elementLocated(By.css('.empty-react-watchlist')));
    let imInMyWatchList = await $('.empty-react-watchlist');
    assert.instanceOf(imInMyWatchList, imInMyWatchList.constructor, "Expected a web element");
    await sleep(sleepTime);
  });

  this.When(/^find a movie to add$/, async function () {
    await driver.wait(until.elementLocated(By.linkText('Browse Popular Movies')));
    let findMovieToAdd = driver.findElement(By.linkText('Browse Popular Movies'));
    findMovieToAdd.click();
    await sleep(sleepTime);
    await driver.wait(until.elementLocated(By.css('.chart')))
    let findMovieToList = driver.findElement(by.linkText('The Shawshank Redemption'));
    findMovieToList.click();
    await sleep(sleepTime);
    await driver.wait(until.elementLocated(By.css('.uc-add-wl-button')));
    let checkAddedMovie = await $('.uc-add-wl-button');
    assert.instanceOf(checkAddedMovie, checkAddedMovie.constructor, "Expected a web element");
    await sleep(sleepTime);
  });

  this.When(/^add a to watchlist$/, async function () {
    let addMovieToList = driver.findElement(by.css('.uc-add-wl-button'));
    addMovieToList.click();
    await sleep(sleepTime);

    await driver.wait(until.elementLocated(By.css('.sc-kpOJdX')));
    let watchListButton = await $('.sc-kpOJdX');
    watchListButton.click();
    await sleep(sleepTime);
    await driver.wait(until.elementLocated(By.css('.lister-item')));
    let checkMyWatchList = await $('.lister-item');
    assert.instanceOf(checkMyWatchList, checkMyWatchList.constructor, "Expected a web element");
    await sleep(sleepTime);
  });

  this.When(/^remove a movie from my watchlist$/, async function () {
    await driver.wait(until.elementLocated(By.css('.button')));
    let removeMovieFromList = driver.findElement(By.css('.wl-ribbon'));
    removeMovieFromList.click();
    await sleep(sleepTime);
    await driver.wait(until.elementLocated(By.css('.sc-kpOJdX')));
    let watchListButton = await $('.sc-kpOJdX');
    watchListButton.click();
    await sleep(sleepTime);
  });

  this.Then(/^the watchlist should be empty$/, async function () {
    await driver.wait(until.elementLocated(By.css('.empty-react-watchlist')));
    let imInMyWatchList = await $('.empty-react-watchlist');
    assert.instanceOf(imInMyWatchList, imInMyWatchList.constructor, "Expected a web element");
  });


  //scenaio watchlist add/remove end




  this.When(/^I click the sign in button$/, async function () {
    let signInButton = await driver.findElement(by.linkText("Sign In"));
    signInButton.click()
    assert(signInButton, "can not find the sign in button");
    await sleep(sleepTime)
  });

  this.When(/^I click the create a new account button$/, async function () {
    let newAccountButton = await driver.findElement(by.linkText("Create a New Account"));
    newAccountButton.click();
    assert(newAccountButton, "can not find the create a new account button");
    await sleep(sleepTime);
  });

  this.When(/^I enter my e\-mail$/, async function () {
    let mailField = driver.findElement(by.css('#ap_email'));
    assert(mailField, 'can not find the mail field on the page');
    mailField.sendKeys('jens.i.t.magnusson@hotmail.com')
  });

  this.When(/^I enter a valid password$/, async function () {
    let passField = driver.findElement(by.css('#ap_password'));
    assert(passField, 'can not find the password field on the page');
    passField.sendKeys('12345678');
  });

  this.When(/^I re\-enter the password$/, async function () {
    let confirmField = driver.findElement(by.css('#ap_password_check'));
    assert(confirmField, 'can not find the password check field on the page');
    confirmField.sendKeys('12345678');
  });

  this.When(/^I click the create an IMDB account button$/, async function () {
    let createAccountButton = await driver.findElement(by.id('#continue'));
    createAccountButton.click();
    assert(createAccountButton, "can not find the create an IMDB account button");
    await sleep(sleepTime);
  });

  this.Then(/^I should receive an error message$/, async function () {
    let error = await driver.wait(until.elementLocated(By.css('#auth-warning-message-box > div > h4')));
    assert(error, 'Everything went fine');

    await sleep(sleepTime);
  });

}





