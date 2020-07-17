Feature: Login

    I want to login to the Trello page

    @smoke
    Scenario: Login with correct credentials
        When I log with my trello account as "user1"
        Then I should be logged