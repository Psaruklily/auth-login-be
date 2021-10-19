const router = require('express').Router();
const { userController } = require('../controller');
const { authMiddleware } = require('../middleware');

router.post('/', userController.loginUser);
router.delete('/', authMiddleware.checkAccessTokenMiddleware, userController.logoutUser);

module.exports = router;