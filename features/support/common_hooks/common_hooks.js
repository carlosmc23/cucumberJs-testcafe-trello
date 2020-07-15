const { After, Before } = require('cucumber');
const MenuBoard = require('../../../pages/board/MenuBoard');
const MenuMoreBoard = require('../../../pages/board/MenuMoreBoard');
const ClosedBoardPage = require('../../../pages/board/ClosedBoardPage');
const TeamPage = require('../../../pages/team/TeamPage');
const TeamSettings = require('../../../pages/team/TeamSetting');

const menu = new MenuBoard();
const moreMenu = new MenuMoreBoard();
const closedBoard = new ClosedBoardPage();
const team = new TeamPage();
const settings = new TeamSettings();

/* After({ tags: "@deleteBoard" }, async function () {
  await menu.goToMoreMenu();
  await moreMenu.selectCloseBoard();
  await closedBoard.permanentlyDeleteBoard();
});

After({ tags: "@deleteTeam" }, async function () {
  await team.goToSettings();
  await settings.deteleTeamPermanently();
}); */

class CleanData {
  async deleteBoard() {
    await menu.goToMoreMenu();
    await moreMenu.selectCloseBoard();
    await closedBoard.permanentlyDeleteBoard();
  }

  async deteleTeam() {
    await team.goToSettings();
    await settings.deteleTeamPermanently();
  }
}
module.exports = CleanData;

