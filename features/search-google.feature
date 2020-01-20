Feature:
  As a user I want to search for titles, TV-episodes, celebs, companies and keywords
  to get a relevant result using the english language

  Background:

    Given  That I’m on the platform IMDb.com


  Scenario:
    When jag söker på något, ska resultat som innehåller sökordet visas


Scenario: As a user i want to be able to search on titles on IMDB
  When I enter a title
  And I press the categories button
  And I press Titles
  When I press the search button
  Then I should see the search results based on titles