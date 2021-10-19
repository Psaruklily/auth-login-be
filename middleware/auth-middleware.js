const jwt = require('jsonwebtoken');
const O_Auth = require('../database/models/O_Auth');
const { JWT_SECRET } = require('../config/config');

module.exports = {
    checkAccessTokenMiddleware: async(req, res, next) => {
        try {
            const access_token = req.get('Authorization');

            if(!access_token) {
                throw new Error('Token is required');
            }

            jwt.verify(access_token, JWT_SECRET, err => {
                if(err) throw new Error('Not valid token');
            });

            const tokens = await O_Auth.findOne({ access_token }).populate('user');

            console.log('tokens----', tokens);

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
}