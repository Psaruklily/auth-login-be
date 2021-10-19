const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_SECRET_REFRESH } = require('../config/config');

module.exports = () => {
    const access_token = jwt.sign({}, JWT_SECRET, { expiresIn: '20s' });
    const refresh_token = jwt.sign({}, JWT_SECRET_REFRESH, { expiresIn: '30d' });

    return {
        access_token,
        refresh_token,
    }
}