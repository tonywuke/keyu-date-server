var express = require('express');
var router = express.Router();
var usersConroller = require('./users_controller');
/* GET users listing. */


router.post('/signup', usersConroller.signup);

router.post('/login', usersConroller.login);

router.post('/save-user-info', usersConroller.saveUserInfo);

router.post('/send-verify-mail', usersConroller.sendVerifyMail);

router.post('/verify-mailbox', usersConroller.verifyMailbox);

router.get('/get-user-info', usersConroller.getUserInfo);

module.exports = router;
