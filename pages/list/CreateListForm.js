const selector = require('testcafe').Selector;

class CreateListForm {

    get selectors() {
        return {
            addListName: selector('input.list-name-input'),
            addListButton: selector('input.primary.mod-list-add-button')
        };
    }

    async setListName(listName) {
        await testController.typeText(this.selectors.addListName, listName);
    }

    async submit() {
        await testController.click(this.selectors.addListButton);
    }

}

module.exports = CreateListForm;
