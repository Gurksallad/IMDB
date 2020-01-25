let { $, sleep } = require('./funcs');

module.exports = function () {
  let profileBar


  this.Given(/^That I’m on the platform IMDb\.com$/, async function () {
    let webpage
    await helpers.loadPage('https://imdb.com');
    webpage = await $('#home_img_holder')
    assert.instanceOf(webpage, webpage.constructor, "Expected a web element")

  });

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

  });

  this.Given(/^i have clicked create a new list$/, async function () {

    await driver.wait(until.elementLocated(By.css('.navbar__user-menu-toggle__name')))
    profileBar = await $(".navbar__user-menu-toggle__name")
    profileBar.click()
    await driver.wait(until.elementLocated(By.linkText('Your lists')))
    let button = await driver.findElement(by.linkText('Your lists')) //om du vill få tag på element med en text inuti
    //let button = await $('a[href="/profile/lists?ref_=\'nv_usr_lst_3\'"]') //om du vill få tag på ett element via href(kan behövas extra \\)
    button.click()
    await driver.wait(until.elementLocated(By.css('.btn-raised--primary')))
    button = await driver.findElement(by.css('.btn-raised--primary'))
    button.click()
    await driver.wait(until.elementLocated(By.css('.list-create-button')))
    let titleToFind = await $('.list-create-button')

    assert.instanceOf(titleToFind, titleToFind.constructor, "Expected to find the button 'Create list'")
  });

  this.Given(/^i have given my list a name$/, async function () {

    driver.findElement(by.id("list-create-name")).click();
    driver.findElement(by.id("list-create-name")).sendKeys('Min egen lista')
    await sleep(1000)
    assert(true)
  });

  this.When(/^I click the Create button$/, async function () {
    let button = await driver.findElement(by.css('.list-create-button'))
    button.click()
    await driver.wait(until.elementLocated(By.css('.list-edit-done')))
    button = await driver.findElement(by.css('.list-edit-done'))
    await sleep(500)
    button.click()
    await driver.wait(until.elementLocated(By.linkText('See all lists by you')))
    let redirection = await driver.findElement(by.linkText('See all lists by you'))
    assert.instanceOf(redirection, redirection.constructor, "Expected to be redirected")

  });

  this.Then(/^i should have a list$/, async function () {
    let link = await driver.findElement(by.linkText('See all lists by you'))
    link.click()
    await driver.wait(until.elementLocated(By.linkText('Min egen lista')))
    let createdList = await driver.findElement(by.linkText('Min egen lista'))
    assert.instanceOf(createdList, createdList.constructor, "Expected to find new list in lists of lists")
    
  });
}

