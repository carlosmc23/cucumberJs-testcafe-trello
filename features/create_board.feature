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
    Scenario: Create a board, a list and a card
        When I create a board with the following name "Great"
        And I create a list with the following name "In progress"
        And I go to "Done" list
        And I create a card with the following name "Improving tests"
        Then I shoud have items created with:
            | boardName | Great           |
            | listName  | In progress     |
            | cardName  | Improving tests |


    @endToEnd
    Scenario: Create a board, a list and a card
        When I create a board with the following name "Simple"
        And I go to delete board in more menu
        And I delete the board
        And I log out of the trello application
        Then I should see the message "Tanks for using Trello"

