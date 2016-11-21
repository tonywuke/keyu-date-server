/**
 * Created by Tonywuke on 16/十一月/18.
 */
var express = require('express');
var router = express.Router();
var filesConroller = require('./files_controller');
/* GET users listing. */

router.post('/upload', filesConroller.dataInput);

module.exports = router;
