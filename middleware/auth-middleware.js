const jwt = require('jsonwebtoken');
const O_Auth = require('../database/models/O_Auth');
const { JWT_SECRET, JWT_SECRET_REFRESH } = require('../config/config');

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

            if (!tokens) {
                throw new Error('Tokens not found');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkRefreshTokenMiddleware: async(req, res, next) => {
        try {
            const refresh_token = req.get('Authorization');

            if(!refresh_token) {
                throw new Error('Token is required');
            }

            jwt.verify(refresh_token, JWT_SECRET_REFRESH, err => {
                if(err) throw new Error('Not valid token');
            });

            const tokens = await O_Auth.findOne({ refresh_token });

            if (!tokens) {
                throw new Error('Tokens now found');
            }

            req.tokenInfo = tokens;

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
}