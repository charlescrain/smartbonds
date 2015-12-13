'use strict';
var Bond = require('./BondModel');
var _ = require('lodash');

exports.get = function(req,res,next){
	Bond.find({})
		.then(function(err,bonds){
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
	var newBond = new Bond(req.body);
	newBond.save(function(err, addedBond){
		if(!err)
			res.json(addedBond);
		else
			res.json(err);
	});
};

exports.getBondById = function(req,res,next) {
	Bond.findOne({_id:req.params.id})
		.then(function(err,bond){
			if(!err){
				console.log(bond);
				res.json(bond);
			}
			else{
				res.json(err);
			}
		})
};

exports.put = function(req,res,next) {
	Bond.findOne({_id:req.params.id})
		.then(function(err,bond){
			if(!err){
				_.merge(req.body, bond);
				bond.save(function(err, changedBond){
					res.json(bond);
				});
			}
			else{
				res.json(err);
			}
		})
};

exports.delete = function(req,res,next) {
	Bond.findOneAndRemove({_id:req.params.id})
		.then(function(err,removedBond){
			if(!err){
				console.log(removedBond)
				res.json(removedBond);
			}
			else{
				res.json(err);
			}
		})
};

exports.bondsByOwner = function(req,res,next) {
	Bond.find({owner:req.params.address})
		.then(function(err,bond){
			if(!err){
				res.json(bond);
			}
			else{
				res.json(err);
			}
		})
};


