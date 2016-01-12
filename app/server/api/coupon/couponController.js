'use strict';
var Coupon = require('./CouponModel');
var Bond = require('../bond/BondModel');
var _ = require('lodash');

exports.get = function(req,res,next){
	Coupon.find({})
		.then(function(coupons){
			res.json(coupons);
		}, function(err){
			res.json(err);
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
			next(err);
		}
	});
};

exports.getCouponById = function(req,res,next) {
	Coupon.findOne({_id:req.params.id})
		.then(function(coupon){
			console.log(coupon);
			res.json(coupon);
		}, function(err){
			next(err);
		});
};

exports.put = function(req,res,next) {
	Coupon.findOne({_id:req.params.id})
		.then(function(coupon){
			_.merge(req.body, coupon);
			coupon.save(function(err, changedCoupon){
				res.json(coupon);
			});
		}, function(err){
			next(err);
		});
};

exports.delete = function(req,res,next) {
	Coupon.findOneAndRemove({_id:req.params.id})
		.then(function(removedCoupon){
			console.log(removedCoupon)
			res.json(removedCoupon);
		}, function(err){
			next(err);
		});
};

exports.couponsByOwner = function(req,res,next) {
	Coupon.find({owner:req.params.address}).populate('bond')
		.exec(function(err,coupons){
			if(!err){
				console.log(coupons);
				
				res.json(coupons);
			}
			else{
				next(err);
			}
		})
};
