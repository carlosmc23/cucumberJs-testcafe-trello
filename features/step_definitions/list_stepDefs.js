const { Given, When, Then } = require('cucumber');
const CreateListForm = require('../../pages/list/CreateListForm');
const ListPage = require('../../pages/list/ListPage');
const CleanData = require('../support/common_hooks/common_hooks');

const cleanData = new CleanData();
const listForm = new CreateListForm();
const list = new ListPage();

When('I create a list with the following name {string}', async function (name) {
    await listForm.setListName(name);
    await listForm.submit();
});

Then('I should have a list created with name {string}', async function (name) {
    await list.verifyListName(name);
    await cleanData.deleteBoard();
});