Feature: Reqres APT


    Scenario: Get User Via API
        When User send the request to get user
        Then user should be get user successfully

    Scenario Outline: Create User Via API
        When user sent the post request post request to create user with <name> and <job>
        Then user with <name> and <job> should be created

        Examples:
            | names    | job    |
            | priyanka | Tester |
            | priya    | QA     |

    Scenario Outline: Update User Via API
        When user sent put request to update <name> and <job>
        Then user with <name> and <job> should be Updated

        Examples:
            | name | job       |
            | Asma | Developer |
            | Keya | Tester    |
            

    Scenario Outline: Delete User Via API
        When user sent Delete request to Delete <name> and <job>
        Then user with <name> and <job> should be deleted
        Examples:

            | name | job       |
            | Asma | Developer |
            | Keya | Tester    |










