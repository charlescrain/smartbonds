'use strict';
var router = require('express').Router();
var controller = require('./bondController');

router.route('/bond')
	.get(controller.get)
	.post(controller.post);
router.route('/bond/:id')
	.get(controller.getBondById)
	.put(controller.put)
	.delete(controller.delete)
router.route('/bond/owner/:address')
	.get(controller.bondsByOwner)
router.route('/bond/coupon-owner/:address')
	.get(controller.bondByCoupon)
module.exports = router;