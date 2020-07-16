const selector = require('testcafe').Selector;

class LoggedOutPage {

    get selectors() {
        return {
            centerText: selector('div[class="layout-centered-content"] h1')
                .with({ boundTestRun: testController })
        };
    }

    async verifyLoggedOutMessage(message) {
        await testController.
            expect(this.selectors.centerText.innerText).eql(message);
    }
}
module.exports = LoggedOutPage;
