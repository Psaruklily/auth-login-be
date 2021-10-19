const router = require('express').Router();
const { signupController } = require('../controller');

router.post('/', signupController.signUpUser);

module.exports = router;