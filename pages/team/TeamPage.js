const selector = require('testcafe').Selector;

class TeamPage {

    get selectors() {
        return {
            teamName: selector('.tabbed-pane-header-details h1')
                .with({ boundTestRun: testController }),
            settingsMenu: selector('a.tabbed-pane-nav-item-button.js-org-account')
        }
    }

    async verifyTeamName(name) {
        await testController
            .wait(8000)
            .expect(this.selectors.teamName.innerText).eql(name);
    }

    async goToSettings() {
        await testController.click(this.selectors.settingsMenu);
    }
}

module.exports = TeamPage;
