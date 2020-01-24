Feature: As a user i want to manage my account

    Background:

        Given  That I’m on the platform IMDb.com

    Scenario: As a user i want to be able to add/remove from my watchlist
        Given that i am logged in
        When i click on the watchlist
        And find a movie to add
        And add a to watchlist
        And remove a movie from my watchlist
        Then the watchlist should be empty


    Scenario: As a user when I try to use a registered e-mail I should get an error message
        When I click the sign in button
        And I click the create a new account button
        And I enter my name
        And I enter my e-mail
        And I enter a valid password
        And I re-enter the password
        And I click the create an IMDB account button
        Then I should receive an error message
