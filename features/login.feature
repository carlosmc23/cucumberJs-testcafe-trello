Feature: Login

    I want to login to the Trello page

    @smoke
    Scenario: Login
        When I log with my trello account as "user1"
        Then I should be logged