
var express = require('express');
var router = express.Router();

const {readData} = require('../controller/Read');

/* GET home page. */
router.get('/', readData);

module.exports = router;
