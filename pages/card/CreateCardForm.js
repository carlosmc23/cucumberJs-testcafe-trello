const selector = require('testcafe').Selector;

class CreateCardForm {

    constructor() {
        this.addCardName = selector('.list-card-composer-textarea');
        this.addCardButton = selector('.primary.confirm');
    }


    async setCardName(name) {
        await testController.typeText(this.addCardName, name);
    }

    async submit() {
        await testController.click(this.addCardButton);
    }
}

module.exports = CreateCardForm;
