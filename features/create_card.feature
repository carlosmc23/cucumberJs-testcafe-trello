Feature: Card

    The user should be able to create a card

    Background: Login, create a board and create a list
        Given I log with my trello account as "user1"
        And I create a board with the following name "LightBoard"
        And I create a list with the following name "Done"

    @acceptance
    Scenario:Create a card
        When I go to "Done" list
        And I create a card with the following name "Improving tests"
        Then I should have a card with the name "Improving tests"

