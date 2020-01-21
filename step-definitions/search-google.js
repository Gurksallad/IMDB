let { $, sleep } = require('./funcs');

module.exports = function () {

  //Feature Sökfunktion/Kategorier background
  let searchField
  this.Given(/^That I’m on the platform IMDb.com$/, async function () {
    await helpers.loadPage('https://imdb.com');
    await sleep(1000)
    searchField = await $('#suggestion-search')
    assert.instanceOf(searchField, searchField.constructor, "Expected a web element")
  });


  this.When(/^I enter the title "([^"]*)"$/, async function (searchText) {
    searchField = await $('#suggestion-search');
    assert(searchField, 'Can not find the search field on the page');
    searchField.sendKeys(searchText);
    await sleep(4000);
  });

  this.When(/^I press the categories button titles$/, async function () {
    let categoriesButton = await $('#nav-search-form > div.search-category-selector.sc-htoDjs.jAJuqP > div > label > div')
    await categoriesButton.click();
    await sleep(4000);
    let titlesButton = await $('#navbar-search-category-select-contents > ul > a:nth-child(2)')
    await titlesButton.click();
  });

  this.When(/^I press the search button$/, async function () {
    let searchButton = await $('#suggestion-search-button > svg');
    assert(searchButton, 'Can not find the search button on the page');
    await searchButton.click();

  });

  this.Then(/^I should see the search results based on the title$/, async function () {
    await driver.wait(until.elementLocated(By.css('.findResult', '.findNoResults')))
    let results = await $('findResult');
    assert(results, 'Could not find any results')
    let firstResult = results[0];
    let resultText = await firstResult.getText();
    assert.include(results, 'The Lion King')
  });
}
