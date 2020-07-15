Feature: Board

    The user should be able to create a personal board
    without any team

    Background: Login in the page
        Given I log with my trello account as "user1"

    # @deleteBoard
    Scenario: Create a personal board from header
        When I create a board with the following name "Supreme"
        Then "Supreme" board should be visible

