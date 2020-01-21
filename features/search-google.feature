Feature:
  As a user I want to search for titles, TV-episodes, celebs, companies and keywords
  to get a relevant result using the english language

  Background:

    Given  That I’m on the platform IMDb.com


  Scenario: I type in an unused email adress and a password i should be able to create an account
    When i press the button sign in
    And press the button Create a New Account
    And I enter my name "Bertilsdotter"
    And I enter a email adress
    And I type in a password "bertilärbäst"
    And I re-enter the same password "bertilärbäst"
    And I press Create your IMDb account
    Then I should be automatically logged in to my account with the name "Bertilsdotter"

#inloggad
#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div.sc-kpOJdX.RWCCJ.imdb-header__watchlist-button > a > div > span
#utloggad
#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div.sc-kpOJdX.RWCCJ.imdb-header__watchlist-button > a > div