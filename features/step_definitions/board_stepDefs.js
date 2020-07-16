const { Given, When, Then } = require('cucumber');
const HeaderPage = require('../../pages/home/HeaderPage');
const CreateBoardForm = require('../../pages/board/CreateBoardForm');
const BoardPage = require('../../pages/board/BoardPage');
const CleanData = require('../support/common_hooks/common_hooks');
const MenuBoard = require('../../pages/board/MenuBoard');
const MenuMoreBoard = require('../../pages/board/MenuMoreBoard');
const ClosedBoardPage = require('../../pages/board/ClosedBoardPage');
const ListPage = require('../../pages/list/ListPage');
const CardPage = require('../../pages/card/CardPage');

const cleanData = new CleanData();
const header = new HeaderPage();
const boardForm = new CreateBoardForm();
const board = new BoardPage();
const menu = new MenuBoard();
const moreMenu = new MenuMoreBoard();
const closedBoard = new ClosedBoardPage();
const list = new ListPage();
const card = new CardPage();

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
    const dataMap = new Map(Object.entries(data.rowsHash()));
    await board.verifyBoardName(dataMap.get('boardName'));
    await list.verifyListName(dataMap.get('listName'));
    await card.verifyCardName(dataMap.get('cardName'));
});

When('I delete the board permanently', async function () {
    await menu.goToMoreMenu();
    await moreMenu.selectCloseBoard();
    await closedBoard.permanentlyDeleteBoard();
});

Then('I should have a board created with {string}', async function (name) {
    await board.verifyBoardName(name);
});
