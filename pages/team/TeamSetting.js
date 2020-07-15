const selector = require('testcafe').Selector;

class TeamSettings {

    get selectors() {
        return {
            deleteTeam: selector('a.quiet-button'),
            deleteForever: selector('input[type="submit"]')
        };
    }

    async deteleTeamPermanently() {
        await testController.click(this.selectors.deleteTeam);
        await testController.click(this.selectors.deleteForever);
    }
}

module.exports = TeamSettings;
