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

//Scenario: As a user i want to be able to search on titles on IMDB start
  this.When(/^I enter a title$/, function () {

  });

  this.When(/^I press the categories button$/, function () {

  });
  this.When(/^I press Titles$/, function () {

  });

  this.When(/^I press the search button$/, function () {

  });

  this.Then(/^I should see the search results based on titles$/, function () {

  });
//Scenario: As a user i want to be able to search on titles on IMDB end
}

