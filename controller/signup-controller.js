const userService = require('../service/user-service');
const { passwordHelper } = require('../helper');

module.exports = {
    signUpUser: async(req, res) => {
        try{
            const { password } = req.body;
            const hashPassword = await passwordHelper.hash(password);
            const createdUser = await userService.createUser({...req.body, password: hashPassword});
            res.json(createdUser);
        } catch(error) {
            res.json(error.message);
        }
    },
}