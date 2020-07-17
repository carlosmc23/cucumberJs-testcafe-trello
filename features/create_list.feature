Feature: List

    The user should be able to create a list inside a board

    Background: Login and create a board
        Given I log with my trello account as "user1"
        And I create a board with the following name "Chess"

    @acceptance
    Scenario: User creates a list and verifies its name
        When I create a list with the following name "review"
        Then I should have a list created with name "review" 
