'use strict';
var User = require('./userModel');
var _ = require('lodash');

exports.get = function(req,res,next) {
	User.find({})
		.then(function(err,users){
			if(!err)
				res.json(users);
			else
				next();
		});
};