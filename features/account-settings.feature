    Feature: As a user i want to manage my account
    
    Background:

        Given  That I’m on the platform IMDb.com

    Scenario: As a user I want to create a list
    Given that i am logged in
    And i have clicked create a new list
    And i have given my list a name
    When I click the Create button
    Then i should have a list