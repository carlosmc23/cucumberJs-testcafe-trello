const Environment = require('../features/support/utils/Environment');
const env = new Environment();

class BasePage {
    constructor() {
        this.baseUrl = env.getBaseUrl();
    }
}

module.exports = BasePage;
