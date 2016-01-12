'use strict';
var User = require('./userModel');
var _ = require('lodash');

exports.get = function(req,res,next) {

	User.find({})
		.then(function(users){
			res.json(users);
		}, function(err){
			next(err);
		});
};

exports.post = function(req,res,next) {
	console.log(req.body);
	var newUser = new User(req.body);
	newUser.save(function(err, addedUser){
		if(!err)
			res.json(addedUser);
		else {
			res.status(503);
			next(err);
		}
	});
};

exports.getOne = function(req,res,next) {
	User.findOne({address:req.params.address})
		.then(function(user){
			console.log(user);
			res.json(user);
		}, function(err){
			next(err);
		});
};

exports.put = function(req,res,next) {
	User.findOne({address:req.params.address})
		.then(function(user){
			_.merge(req.body, user);
			user.save(function(err, changedUser){
				res.json(user);
			});
		}, function(err){
			res.status(503);
			next(err);
		});
};

exports.delete = function(req,res,next) {
	User.findOneAndRemove({address:req.params.address})
		.then(function(removedUser){
			console.log(removedUser)
			res.json(removedUser);
		}, function(err){
			res.status(503);
			next(err);
		});
};

