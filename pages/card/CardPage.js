const selector = require('testcafe').Selector;

class CardPage {

    get seletors() {
        return {
            cardName: selector('.list-card-title.js-card-name')
                .with({ boundTestRun: testController })
        }
    }

    getSpecificCard(name){
        return selector('.list-card-title.js-card-name')
        .withExactText(name)
        .with({ boundTestRun: testController }) 
    }

    async verifyCardName(cardName) {
        await testController.expect(this.getSpecificCard(cardName).exists).ok();
    }
}

module.exports = CardPage;
