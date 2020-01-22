Feature: As a user i want to manage my account

    Background:

        Given  That I’m on the platform IMDb.com

    Scenario: As a user i want to be able to add/remove from my watchlist
        Given that i am logged in
        And click on the watchlist
        When I'm in my watchlist
        And add something to my watchlist
        Then remove something from my watchlist

    Scenario: As a user when I try to use a registered e-mail I should get an error message
        When I click the sign in button
        And I click the create a new account button
        And I enter my name
        And I enter my e-mail
        And I enter a valid password
        And I re-enter the password
        And I click the create an IMDB account button
        Then I should receive an error message
