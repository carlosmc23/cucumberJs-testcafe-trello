const { Given, Then, When, After } = require('cucumber');
const HeaderPage = require('../../pages/home/HeaderPage');
const CreateTeamForm = require('../../pages/team/CreateTeamForm');
const TeamPage = require('../../pages/team/TeamPage');
const CleanData = require('../support/common_hooks/common_hooks');

const cleanData = new CleanData();
const header = new HeaderPage();
const teamForm = new CreateTeamForm();
const team = new TeamPage();

When('I create a team with the following name {string}', async function (name) {
    await header.goToCreateMenu();
    await header.goToCreateTeamForm();
    await teamForm.setTeamName(name);
});

When('I select the type of team as {string}', async function (type) {
    await teamForm.setTeamType(type);
    await teamForm.submit();
});

When('I skip inviting members', async function () {
    await teamForm.addMembersLater();
});

Then('I should have a team created with name {string}', async function (name) {
    await team.verifyTeamName(name);
    await cleanData.deteleTeam();
});

/* After('@deleteTeam', async function () {
    await team.goToSettings();
    await settings.deteleTeamPermanently();
    await cleanData.deteleTeam();
}); */