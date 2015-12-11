'use strict';
var router = require('express').Router();
var controller = require('./userController');

router.route('/')
	.get(controller.get)
	.post(controller.post);
router.route('/:address')
	.get(controller.getOne)
	.put(controller.put)
// 	.delete(controller.delete)

module.exports = router;