const User = require('../database/models/User');
const { passwordHelper } = require('../helper');
const bcrypt = require('bcrypt');

module.exports = {
    userAuth: async(req, res) => {
        const { email, password } = req.body;

        User.findOne({ email })
            .then(user => {
                if(!user) return res.status(400).json({ msg: 'User not exist' });
                passwordHelper.compare(res, password, user.password);
            })
    },
}