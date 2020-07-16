const { Given, When, Then } = require('cucumber');
const Login = require('../../pages/login/LoginPage');
const User = require('../../features/support/utils/User');
const HeaderPage = require('../../pages/home/HeaderPage');

const login = new Login();
const header = new HeaderPage();

Given('I log with my trello account as {string}', async function (userType) {
    const user = new User(userType);
    await testController.navigateTo(login.baseUrl);
    await login.setCredentials(user.getUsername(), user.getPassWord());
    await login.submit();
});

Then('I should be logged', async function () {
    await header.verifyMemberMenu();
});

When('I log out of the trello application', async function(){

});

Then('I should see the message {string}', async function(message){

});