const bcrypt = require('bcrypt');

module.exports = {
    hash: (password) => bcrypt.hash(password, 10),

    compare: (res, password, hashPassword) => bcrypt.compare(password, hashPassword, (err, data) => {
        if(!data) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }
        if(data) {
            return res.status(200).json({ msg: 'Login success' });
        }
    }),
}