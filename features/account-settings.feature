    Feature: As a user i want to manage my account
    
    Background:

        Given  That I’m on the platform IMDb.com

    Scenario: As a user I want to create a list
    Given that i am logged in
    And i have clicked create a new list
    And i have given my list a name
    When I click the Create button
    Then i should have a list

    Scenario: As a user i want to be able to add/remove from my watchlist
        Given that i am logged in
        When i click on the watchlist
        And find a movie to add
        And add a to watchlist
        And remove a movie from my watchlist
        Then the watchlist should be empty


    Scenario: As a user I want to be able to edit my content settings
        Given that i am logged in
        And click on account settings
        And click on content settings
        And i change the title pages
        And i change the name pages
        And i change the contributors
        When i click submit
        Then my settings should be saved

    Scenario: As a user when I try to use a registered e-mail I should get an error message
        When I click the sign in button
        And I click the create a new account button
        And I enter my name
        And I enter my e-mail
        And I enter a valid password
        And I re-enter the password
        And I press Create your IMDb account
        Then I should receive an error message
