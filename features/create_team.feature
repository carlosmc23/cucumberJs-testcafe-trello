Feature: Team

    The user should be able to create a Team

    Background: Login and Create a team
        Given I log with my trello account as "user1"

    @acceptance @smoke
    Scenario: Create a team without members
        When I create a team with the following name "Code"
        And I select the type of team as "operations"
        And I skip inviting members
        Then I should have a team created with name "Code"