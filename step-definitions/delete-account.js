let { $, sleep } = require('./funcs');

module.exports = function () {
  
  
  this.Given(/^I have clicked on the profile in the upper right corner$/, async function () {
    await driver.wait(until.elementLocated(By.css('.navbar__user')))
    let button = await $('.navbar__user')
    button.click()
    assert (true)
  });

  this.Given(/^I have clicked on account settings$/, async function () {
    await driver.wait(until.elementLocated(By.css('#navUserMenu-contents > ul > a:nth-child(7)')))
    let button = await $('#navUserMenu-contents > ul > a:nth-child(7)')
    button.click()
    let redirection = await driver.findElement(by.id("main"))
    assert.instanceOf(redirection, redirection.constructor, "Expected to be redirected")
  });

  this.Then(/^I have clicked on delete account in settings$/, async function () {
    await driver.wait(until.elementLocated(By.css('#main > div > div:nth-child(3) > ul > li:nth-child(2) > a')))
    let button = await $('#main > div > div:nth-child(3) > ul > li:nth-child(2) > a')
    button.click()
    let redirection = await driver.findElement(by.id("main"))
    assert.instanceOf(redirection, redirection.constructor, "Expected to be redirected")
  });

  this.Then(/^I click the delete button$/, async function () {
    await driver.wait(until.elementLocated(By.css('#main > div > form > input.pretty_btn')))
    let button = await $('#main > div > form > input.pretty_btn')
    button.click()
    searchField = await $('#home_img_holder')
    assert.instanceOf(searchField, searchField.constructor, "Expected a web element")
  });

  this.Then(/^I should have deleted my account$/, async function () {
    await driver.wait(until.elementLocated(By.css('.imdb-header__signin-text')))
    let button = await $('.imdb-header__signin-text')
    button.click()
    await driver.wait(until.elementLocated(By.css('.imdb-logo')))
    button = await $('.imdb-logo')
    button.click()
    await driver.wait(until.elementLocated(By.name('email')))
    driver.findElement(by.name("email")).click();
    driver.findElement(by.name("email")).sendKeys('hugonilssonmeier@gmail.com')
    driver.findElement(by.name("password")).click()
    driver.findElement(by.name("password")).sendKeys('King1234')
    await driver.wait(until.elementLocated(By.id("signInSubmit")))
    button = driver.findElement(by.id("signInSubmit"))
    button.click()
    await driver.wait(until.elementLocated(By.css('.ipc-icon--account-circle')))
    let loggedInUserScreen = await $('.ipc-icon--account-circle')
    assert.instanceOf(loggedInUserScreen, loggedInUserScreen.constructor, "Expected a web element")
  });
  }