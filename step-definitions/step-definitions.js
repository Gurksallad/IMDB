let { $, sleep } = require('./funcs');

module.exports = function () {

  //Feature Sökfunktion/Kategorier background
  let searchField
  let sleepTime = 3000;
  this.Given(/^That I’m on the platform IMDb.com$/, async function () {
    await helpers.loadPage('https://imdb.com');
    await sleep(sleepTime)
    searchField = await $('#suggestion-search')
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
}
