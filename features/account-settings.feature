    Feature: As a user i want to manage my account
    
    Background:

        Given  That I’m on the platform IMDb.com

    Scenario: As a user i want to be able to add/remove from my watchlist
    Given that i am logged in
    And click on the watchlist
    When I'm in my watchlist
    And add something to my watchlist
    Then remove something from my watchlist

