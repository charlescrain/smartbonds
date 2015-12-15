'use strict';
var router = require('express').Router();

router.route('/')
	.get(function(req, res){
  res.render('index');
});

router.route('/login')
	.get(function(req, res){
  res.render('login');
});


module.exports = router;


// exports.partial = function (req, res) {
//   var name = req.params.name;
//   res.render('partials/partial' + name);
// };