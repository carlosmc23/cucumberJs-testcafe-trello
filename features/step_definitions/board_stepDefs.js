const { Given, When, Then } = require('cucumber');
const HeaderPage = require('../../pages/home/HeaderPage');
const CreateBoardForm = require('../../pages/board/CreateBoardForm');
const BoardPage = require('../../pages/board/BoardPage');
const CleanData = require('../support/common_hooks/common_hooks');

const cleanData = new CleanData();
const header = new HeaderPage();
const boardForm = new CreateBoardForm();
const board = new BoardPage();

When('I create a board with the following name {string}', async function (boardName) {
    await header.goToCreateMenu();
    await header.goToCreateBoardForm();
    await boardForm.setBoardName(boardName);
    await boardForm.selectPersonalBoard();
    await boardForm.submit();
});

Then('I should have a board (created)(updated) with name {string}', async function (expectedName) {
    await board.verifyBoardName(expectedName);
    await cleanData.deleteBoard();
});

When('I update the board\'s name with {string}', async function (boardName) {
    await board.editBoardName(boardName);
});

Then('I shoud have items created with:', async function (data) {

});

When('I go to delete board in more menu', async function () {

});
When('I delete the board', async function () {

});
