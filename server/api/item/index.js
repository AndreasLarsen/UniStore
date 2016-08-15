'use strict';

var express = require('express');
var controller = require('./item.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/', controller.index);
router.post('/add', controller.add);

module.exports = router;