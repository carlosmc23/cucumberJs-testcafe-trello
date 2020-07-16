const { Given, When, Then } = require('cucumber');
const Login = require('../../pages/login/LoginPage');
const User = require('../../features/support/utils/User');
const HeaderPage = require('../../pages/home/HeaderPage');
const MemberMenuPage = require('../../pages/home/memberMenuPage');
const LoggedOutPage = require('../../pages/login/LoggedOutPage');

const login = new Login();
const header = new HeaderPage();
const memberMenu = new MemberMenuPage();
const loggedOut = new LoggedOutPage();

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
    await header.goToMemberMenu();
    await memberMenu.logOut();
});

Then('I should see the message {string}', async function(message){
    await loggedOut.verifyLoggedOutMessage(message);
});