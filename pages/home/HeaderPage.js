const selector = require('testcafe').Selector;

class HeaderPage {

    constructor() {
        this.createMenuButton = selector('span[name = "add"]');
        this.createBoardButton = selector('button[data-test-id*="create-board-button"]');
        this.createTeamButton = selector('button[data-test-id="header-create-team-button"]');
        this.homeButton = selector('span[name = "house"]');
        this.boardsMenuButton = selector('button[data-test-id="header-boards-menu-button"]');
    }

    get selectors() {
        return {
            memberMenu: selector('button[aria-label="Open Member Menu"]')
                .with({ boundTestRun: testController })
        };
    }

    async goToCreateMenu() {
        await testController.wait(20000);
        await testController.click(this.createMenuButton);
    }

    async goToCreateBoardForm() {
        await testController.click(this.createBoardButton);
    }

    async goToCreateTeamForm() {
        await testController.click(this.createTeamButton);
    }

    async goToHome() {
        await testController.click(this.homeButton);
    }

    async goToBoardsMenu() {
        await testController.click(this.boardsMenuButton);
    }

    async goToPersonalBoard(boardName) {
        await testController.click(selector('a[title=' + boardName + ']'));
    }

    async verifyMemberMenu() {
        await testController.expect(this.selectors.memberMenu().exists).ok();
    }

    async goToMemberMenu() {
        await testController.click(this.selectors.memberMenu);
    }
}

module.exports = HeaderPage;
