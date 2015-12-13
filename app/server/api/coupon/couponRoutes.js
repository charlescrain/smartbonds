'use strict';
var router = require('express').Router();
var controller = require('./couponController');

router.route('/')
	.get(controller.get)
	.post(controller.post);
router.route('/:id')
	.get(controller.getCouponById)
	.put(controller.put)
	.delete(controller.delete);
router.route('/owner/:address')
	.get(controller.couponsByOwner);
module.exports = router;