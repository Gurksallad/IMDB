Feature:
  As a user I want to search for titles, TV-episodes, celebs, companies and keywords
  to get a relevant result using the english language

  Background:

    Given  That I’m on the platform IMDb.com

  Scenario: As a user i want to be able to search on titles on IMDB
    When I enter the title "Lion King"
    And I press the categories button titles
    When I press the search button
    Then I should see the search results based on the title "Lion King"


  Scenario: I type in an unused email adress and a password i should be able to create an account
    When i press the button sign in
    And press the button Create a New Account
    And I enter my name
    And I enter a email adress
    And I type in a password 
    And I re-enter the same password 
    And I press Create your IMDb account
    Then I should be automatically logged in to my account 

  Scenario: I want to login with the same email and password that i registered with
    When i press the button sign in
    And press the sign in with IMDb button
    And I enter my email
    And I enter my password
    And I press the yellow sign in button
    Then I should be logged in to my account




