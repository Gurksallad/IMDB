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

  
  Scenario: As a user i want to be able to search on titles on IMDB
    When I enter the title "Lion King"
    And I press the categories button titles
    And I press the search button
    Then I should see the search results based on the title "Lion King"

  Scenario: As a user I want to be able to search on IMDB
    When I enter "Simpsons" in the searchfield
    And I press the search button
    Then I should see results based on my search

  Scenario: As a user i want to be able to search on companies on IMDB
    When I enter the company "Twentieth Century Fox"
    And I press the categories button companies
    And I press the search button
    Then I should see the search results based on the title "Twentieth Century Fox"
    
  Scenario: As a user i want to be able to search for a celebritie on IMDB
    When I enter the name of "Sylvester Stallone"
    And I press the categories button celebrities
    And I press the search button
    Then I should see the search results based on the name "Sylvester Stallone"

  Scenario: As a user i want to be able to search on tv-episodes on IMDB
    When I enter the episode "The Iron Throne"
    And I press the categories button tv-episodes
    And I press the search button
    Then I should see the search results based on the title "The Iron Throne"