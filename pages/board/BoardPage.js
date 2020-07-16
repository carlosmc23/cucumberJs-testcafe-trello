const selector = require('testcafe').Selector;

class BoardPage {

    get selectors() {
        return {
            boardName: selector('span[class*="js-board-editing-target"]')
                .with({ boundTestRun: testController }),
            addListButton: selector('div.js-add-list span.icon-add'),
            editBoard: selector('div.board-header-btn.is-editing'),
        };
    }

    async verifyBoardName(name) {
        await testController.expect(this.selectors.boardName().innerText).eql(name);
    }

    async createListButton() {
        await testController.click(this.selectors.addListButton);
    }

    async editBoardName(name) {
        await testController
            .click(this.selectors.boardName)
            .typeText(this.selectors.editBoard, name)
            .pressKey('enter');
    }
}

module.exports = BoardPage;
