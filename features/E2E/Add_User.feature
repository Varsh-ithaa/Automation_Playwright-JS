@E2E
Feature: Complete End to End Automation

    @Add_User_Create
    Scenario Outline: Creating/Adding New user in Admin module.
        Given Launching the URL
        Then user should signIn with "<username>" and "<password>"
        Then Verify user logged in succsessfully
        When user selects "Admin" menu
        Examples:
            | username | password |
            | Admin    | admin123 |