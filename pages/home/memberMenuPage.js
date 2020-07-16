const selector = require('testcafe').Selector;

class memberMenuPage {

    get selectors() {
        return {
            logOutButton: selector('button[data-test-id*="menu-logout"]')
        }
    };

    async logOut() {
        await testController.click(this.selectors.logOutButton);
    }


}

module.exports = memberMenuPage;