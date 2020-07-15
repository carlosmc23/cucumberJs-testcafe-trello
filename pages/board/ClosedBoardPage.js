const selector = require('testcafe').Selector;

class ClosedBoardPage {

    constructor() {
        this.deleteBoardButton = selector('a.quiet.js-delete');
        this.confirmDeleteButton = selector('input.js-confirm.full.negate');
    }

    async permanentlyDeleteBoard() {
        await testController
            .click(this.deleteBoardButton)
            .click(this.confirmDeleteButton);
    }
}

module.exports = ClosedBoardPage;
