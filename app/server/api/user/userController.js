'use strict';
var User = require('./userModel');
var _ = require('lodash');

exports.get = function(req,res,next) {

	User.find({})
		.then(function(err,users){
			if(!err){
				res.json(users);
			}
			else{
				res.json(err);
			}
		});
};

exports.post = function(req,res,next) {
	console.log(req.body);
	var newUser = new User(req.body);
	newUser.save(function(err, addedUser){
		if(!err)
			res.json(addedUser);
		else
			res.json(err);
	});
};

exports.getOne = function(req,res,next) {
	User.findOne({address:req.params.address})
		.then(function(err,user){
			if(!err){
				console.log(user);
				res.json(user);
			}
			else{
				res.json(err);
			}
		})
};

exports.put = function(req,res,next) {
	User.findOne({address:req.params.address})
		.then(function(err,user){
			if(!err){
				_.merge(req.body, user);
				user.save(function(err, changedUser){
					res.json(user);
				});
			}
			else{
				res.json(err);
			}
		})
};

exports.delete = function(req,res,next) {
	User.findOneAndRemove({address:req.params.address})
		.then(function(err,removedUser){
			if(!err){
				console.log(removedUser)
				res.json(removedUser);
			}
			else{
				res.json(err);
			}
		})
};

