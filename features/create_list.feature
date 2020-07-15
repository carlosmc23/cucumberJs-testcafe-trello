Feature: List

    The user should be able to create a list inside a board

    Background: Login and create a board
        Given I log with my trello account as "user1"
        And I create a board with the following name "Chess"

    # @deleteBoard
    Scenario:Create a list
        When I create a list with the following name "review"
        Then The "review" list should be visible
