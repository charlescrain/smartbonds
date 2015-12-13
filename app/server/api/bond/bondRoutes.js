'use strict';
var router = require('express').Router();
var controller = require('./bondController');

router.route('/')
	.get(controller.get)
	.post(controller.post);
router.route('/:id')
	.get(controller.getBondById)
	.put(controller.put)
	.delete(controller.delete);
router.route('/owner/:address')
	.get(controller.bondsByOwner);
module.exports = router;