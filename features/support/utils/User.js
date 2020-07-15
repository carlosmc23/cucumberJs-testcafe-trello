const Environment = require('./Environment');
const env = new Environment();

class User {
    constructor(user) {
        this.user = env.getAccount(user);
    }

    getUsername() {
        return this.user.username;
    }

    getPassWord() {
        return this.user.password;
    }
}

module.exports = User;
