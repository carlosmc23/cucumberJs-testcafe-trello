const selector = require('testcafe').Selector;

class ListPage {

    get selectors() {
        return {
            addCardButton: selector('.js-add-a-card')
        }
    }

    getSpecificList(name){
        return selector ('h2.list-header-name-assist')
        .withExactText(name)
        .with({ boundTestRun: testController });
    }

    addCardButtonOnSpecificList(name) {
        return selector('h2.list-header-name-assist')
            .withExactText(name)
            .parent('div')
            .parent('div')
            .child('div.card-composer-container')
            .child('a')
            .child('span.icon-add')
            .with({ boundTestRun: testController });
    }

    async verifyListName(listName) {
        await testController.expect(this.getSpecificList(listName).exists).ok();
    }

    async createCardButton() {
        await testController.click(this.selectors.addCardButton);
    }

    async addCardOnSelectedList(name) {
        await testController.click(this.addCardButtonOnSpecificList(name));
    }
}

module.exports = ListPage;
