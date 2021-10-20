const User = require('../database/models/User');
const O_Auth = require('../database/models/O_Auth');
const { passwordHelper, tokenizer } = require('../helper');

module.exports = {
    userAuth: async(req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                throw new Error('No user');
            }

            await passwordHelper.compare(password, user.password);

            const tokens = tokenizer();

            await O_Auth.create({...tokens, user: user._id});

            res.json(tokens);
        } catch (e) {
            res.json(e.message);
        }

        // User.findOne({ email })
        //     .then(user => {
        //         if(!user) return res.status(400).json({ msg: 'User not exist' });
        //         passwordHelper.compare(res, password, user.password);
        //         const tokens = tokenizer();
        //         console.log(tokens);
        //     })
    },

        refreshToken: async(req, res) => {
        try {
            const {user, _id} = req.tokenInfo;
            console.log('-----', req.tokenInfo);
            const tokens = tokenizer();

            await O_Auth.findByIdAndUpdate(_id, {...tokens, user});

            res.json(tokens);
        } catch (e) {
            res.json(e.message);
        }
    }
}