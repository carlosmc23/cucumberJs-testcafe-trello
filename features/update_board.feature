Feature: Board

    The user should be able to update a the name of the selected board.

    Background: Login and create a board
        Given I log with my trello account as "user1"
        And I create a board with the following name "News"

    @acceptance
    Scenario: User updates a Board name
        When I update the board's name with "Past News"
        Then I should have a board updated with name "Past News"
        