const selector = require('testcafe').Selector;

class MenuMoreBoard {

    constructor() {
        this.closeBoardButton = selector('a.board-menu-navigation-item-link.js-close-board');
        this.confirmCloseBoard = selector('input.js-confirm.full.negate');
    }

    async selectCloseBoard() {
        await testController
            .click(this.closeBoardButton)
            .click(this.confirmCloseBoard);
    }
}

module.exports = MenuMoreBoard;
