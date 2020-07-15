const { Given, When, Then } = require('cucumber');
const ListPage = require('../../pages/list/ListPage');
const CreateCardForm = require('../../pages/card/CreateCardForm');
const CardPage = require('../../pages/card/CardPage');
const CleanData = require('../support/common_hooks/common_hooks');

const cleanData = new CleanData();
const list = new ListPage();
const cardForm = new CreateCardForm();
const card = new CardPage();

When('I go to {string} list', async function (name) {
    await list.addCardOnSelectedList(name);
});

When('I create a card with the following name {string}', async function (name) {
    await cardForm.setCardName(name);
    await cardForm.submit();
});

Then('I should have a card with the name {string}', async function (name) {
    await card.verifyCardName(name);
    await cleanData.deleteBoard();
});
