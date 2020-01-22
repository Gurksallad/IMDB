let { $, sleep } = require('./funcs');

module.exports = function () {

  /*
    let searchField
  
    this.Given(/^that I'm at the search page$/, async function () {
      await helpers.loadPage('https://google.com');
      await sleep(1000)
      searchField = await $('input.gLFyf')
      assert.instanceOf(searchField, searchField.constructor, "Expected a web element")
    });
  
    this.When(/^I enter search text "([^"]*)"$/, async function (searchString) {
      await searchField.sendKeys(searchString)
      await sleep(3000)
    });
  
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
  
  let sleepTime = 0

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

    let profileBar
    await driver.wait(until.elementLocated(By.css('.navbar__user')))
    profileBar = await $(".navbar__user")
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

  this.Given(/^i have given my list a name$/, function () {

    driver.findElement(by.id("list-create-name")).click();
    driver.findElement(by.id("list-create-name")).sendKeys('Min egen lista')
    await sleep(1000)
    assert(true)
  });

  this.When(/^I click the Create button$/, function () {
    let button = await driver.findElement(by.css('.list-create-button'))
    button.click()
    await driver.wait(until.elementLocated(By.css('.lister-new-instructions')))
    button = await driver.findElement(by.css('.list-edit-done'))
    button.click()

  });
}

