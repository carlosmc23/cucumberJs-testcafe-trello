const selector = require('testcafe').Selector;
const BasePage = require('../BasePage');

class LoginPage extends BasePage {

    get selectors() {
        return {
            userName: selector('#user'),
            password: selector('#password'),
            loginButton: selector('[type="submit"]'),
            passwordEntry: selector('#password-entry')
                .with({ boundTestRun: testController })
        };
    }

    async setCredentials(username, password) {
        await testController
            .typeText(this.selectors.userName, username, { replace: true })
            .wait(2000);
        const passwordIsVisible = await this.selectors.passwordEntry().visible;
        if (!passwordIsVisible) {
            await testController.click(this.selectors.loginButton)
        }
        await testController.typeText(this.selectors.password, password, { replace: true })
    }

    async submit() {
        await testController.click(this.selectors.loginButton);
    }
}
module.exports = LoginPage; 
