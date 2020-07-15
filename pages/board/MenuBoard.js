const selector = require('testcafe').Selector;

class MenuBoard {

    constructor() {
        this.moreMenuButton = selector('a.board-menu-navigation-item-link.js-open-more');
    }

    async goToMoreMenu() {
        await testController.click(this.moreMenuButton);
    }
}

module.exports = MenuBoard;
