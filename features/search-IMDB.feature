Feature: search
  As a user I want to search for titles, TV-episodes, celebs, companies and keywords
  to get a relevant result using the english language

  Background:

    Given  That I’m on the platform IMDb.com

  Scenario: As a user i want to be able to search on titles on IMDB
    When I enter the title "Lion King"
    And I press the categories button titles
    When I press the search button
    Then I should see the search results based on the title "Lion King"


  

