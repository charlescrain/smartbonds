'use strict';
var router = require('express').Router();
var controller = require('./userController');

router.route('/user')
	.get(controller.get)
	.post(controller.post);
router.route('/user/:address')
	.get(controller.getOne)
	.put(controller.put)
	.delete(controller.delete)

module.exports = router;