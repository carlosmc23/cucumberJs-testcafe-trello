Feature: Board

    The user should be able to create a personal board
    without any team

    Background: Login in the page
        Given I log with my trello account as "user1"

    @acceptance @smoke
    Scenario: Create a personal board from header
        When I create a board with the following name "Supreme"
        Then I should have a board created with name "Supreme"

    @endToEnd
    Scenario: Create (board, list, card), delete the board and logout of trello
        When I create a board with the following name "Great"
        And I create a list with the following name "In progress"
        And I go to "In progress" list
        And I create a card with the following name "Improving tests"
        Then I shoud have items created with:
            | boardName | Great           |
            | listName  | In progress     |
            | cardName  | Improving tests |
        And I delete the board permanently
        And I log out of the trello application
        And I should see the message "Thanks for using Trello."


    @endToEnd
    Scenario: create a board, delete it and logout of trello
        When I create a board with the following name "Simple"
        Then I should have a board created with "Simple"
        And I delete the board permanently
        And I log out of the trello application
        And I should see the message "Thanks for using Trello."

