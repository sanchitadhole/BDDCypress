Feature: End to End Recast validation
    # Outline
    Scenario Outline: Login test for the recast
        Given Navigate to recast page
        When User logged in using <username>
        And Password as <password>
        And User clicks on submit button
        Then Home page should be displayed


        Examples:
            | username                  | password |
            | sanchitadhole27@gmail.com | sanchu05 |






