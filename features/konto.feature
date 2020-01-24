Feature: account
As a user i want to create a account, by entering in my namne, a email and a password
As a user I want to be able to log in to the account that i just created  
 


 Background:

  Given  That I’m on the platform IMDb.com



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

 Scenario: if I enter a faulty password, then i should get a warning when trying to create the accouunt
  When i press the button sign in
  And press the button Create a New Account
  And I enter my name
  And I enter an unused email adress
  And I type in a faulty password
  And I re-enter the same faulty password
  And I press Create your IMDb account
  Then I should get a warning box