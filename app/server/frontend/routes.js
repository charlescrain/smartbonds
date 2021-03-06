'use strict';
var router = require('express').Router();

router.route('/')
	.get(function(req, res){
  	res.render('index');
	});


router.route('/:partial')
	.get(function(req, res){
		if(req.params.partial === 'favicon.ico' ){
			res.status(404);
			res.send('Not Found');
		}else{
  		res.render(req.params.partial);
		}
	});


module.exports = router;


// exports.partial = function (req, res) {
//   var name = req.params.name;
//   res.render('partials/partial' + name);
// };