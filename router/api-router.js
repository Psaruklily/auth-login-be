const router = require('express').Router();
const authRouter = require('./auth-router');
const signRouter = require('./signup-router');

router.use('/auth', authRouter);
router.use('/signup', signRouter);

module.exports = router;