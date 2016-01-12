'use strict';
var Bond = require('./BondModel');
var _ = require('lodash');

exports.get = function(req,res,next){
	Bond.find({})
			.then(function(bonds){
			res.json(bonds);
		}, function(err){
			next(err);
		});
};

exports.post = function(req,res,next) {
	var newBond = new Bond(req.body);
	newBond.save(function(err, addedBond){
		if(!err)
			res.json(addedBond);
		else{
			res.status(503);
			next(err);
		}
	});
};

exports.getBondById = function(req,res,next) {
	Bond.findOne({_id:req.params.id})
		.then(function(bond){
			console.log(bond);
			res.json(bond);
		}, function(err){
			next(err);
		});
};

exports.put = function(req,res,next) {
	Bond.findOne({_id:req.params.id})
		.then(function(bond){
			_.merge(req.body, bond);
			bond.save(function(err, changedBond){
				res.json(bond);
			});
		}, function(err){
			res.status(403);
			next(err);
		});
};

exports.delete = function(req,res,next) {
	Bond.findOneAndRemove({_id:req.params.id})
		.then(function(removedBond){
			console.log(removedBond)
			res.json(removedBond);
		}, function(err){
			res.status(403);
			next(err);
		});
};

exports.bondsByOwner = function(req,res,next) {
	Bond.find({owner:req.params.address})
		.then(function(bond){
			res.json(bond);
		}, function(err) {
			next(err);
		});
};


