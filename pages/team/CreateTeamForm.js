const selector = require('testcafe').Selector;

class CreateTeamForm {

    constructor() {
        this.teamNameTextBox = selector('input[data-test-id*="create-team-name"]');
        this.teamTypeDropDown = selector('#teamTypeSelect');
        this.createTeamButton = selector('button[data-test-id*="team-submit-button"]');
        this.addMembersLaterButton = selector('a[data-test-id="show-later-button"]');
    }

    selectTeamType(type) {
        return selector('div[data-test-id*="' + type + '"]');
    }

    async setTeamName(teamName) {
        await testController.typeText(this.teamNameTextBox, teamName);
    }

    async setTeamType(type) {
        await testController
            .click(this.teamTypeDropDown)
            .click(this.selectTeamType(type));
    }

    async submit() {
        await testController.click(this.createTeamButton);
    }

    async addMembersLater() {
        await testController.click(this.addMembersLaterButton);
    }
}

module.exports = CreateTeamForm;
