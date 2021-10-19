const User = require('../database/models/User');

module.exports = {
    createUser: (payload) => User.create(payload),
}