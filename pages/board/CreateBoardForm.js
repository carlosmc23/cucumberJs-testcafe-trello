const selector = require('testcafe').Selector;

class CreateBoardForm {

    constructor() {
        this.boardNameTextBox = selector('input[data-test-id*="create-board-title"]');
        this.createBoardButton = selector('button[data-test-id*="create-board-submit"]');
        this.selectTeamDropDown = selector('input[data-test-id*="create-board-title"] + button');
    }

    get selectors() {
        return {
            selectNoTeamOption: selector('.atlaskit-portal button > span')
                .withExactText('No team')
                .with({ boundTestRun: testController })
        };
    }

    async setBoardName(boardName) {
        await testController.typeText(this.boardNameTextBox, boardName);
    }

    async submit() {
        await testController.click(this.createBoardButton);
    }

    async selectPersonalBoard() {
        await testController
            .click(this.selectTeamDropDown)
            .click(this.selectors.selectNoTeamOption);
    }
}

module.exports = CreateBoardForm;
