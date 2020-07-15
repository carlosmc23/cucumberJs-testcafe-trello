const data = require('../../../config');

class Environment {

    constructor() {
        this.baseUrl = data.baseUrl.toString();
        this.accounts = data.accounts;
    }

    getBaseUrl() {
        return this.baseUrl;
    }

    getAccount(user) {
        return this.accounts
            .filter(account => account.user.match(user)).shift();
    }

}

module.exports = Environment;
