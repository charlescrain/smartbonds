'use strict';
var Coupon = require('./CouponModel');
var Bond = require('../bond/BondModel');
var _ = require('lodash');

exports.get = function(req,res,next){
	Coupon.find({})
		.then(function(err,coupons){
			if(!err){
				res.json(coupons);
			}
			else{
				res.json(err);
			}
		});
};

exports.post = function(req,res,next) {
	console.log(req.body);
	var newCoupon = new Coupon(req.body);
	newCoupon.save(function(err, addedCoupon){
		if(!err)
			res.json(addedCoupon);
		else {
			res.status(503);
			res.json(err);
		}
	});
};

exports.getCouponById = function(req,res,next) {
	Coupon.findOne({_id:req.params.id})
		.then(function(err,coupon){
			if(!err){
				console.log(coupon);
				res.json(coupon);
			}
			else{
				res.json(err);
			}
		})
};

exports.put = function(req,res,next) {
	Coupon.findOne({_id:req.params.id})
		.then(function(err,coupon){
			if(!err){
				_.merge(req.body, coupon);
				coupon.save(function(err, changedCoupon){
					res.json(coupon);
				});
			}
			else{
				res.json(err);
			}
		})
};

exports.delete = function(req,res,next) {
	Coupon.findOneAndRemove({_id:req.params.id})
		.then(function(err,removedCoupon){
			if(!err){
				console.log(removedCoupon)
				res.json(removedCoupon);
			}
			else{
				res.json(err);
			}
		})
};

exports.couponsByOwner = function(req,res,next) {
	Coupon.find({owner:req.params.address}).populate('bond')
		.exec(function(err,coupons){
			if(!err){
				console.log(coupons);
				
				res.json(coupons);
			}
			else{
				res.json(err);
			}
		})
};
