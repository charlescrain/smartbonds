var express = require('express'),
	routes = require('./frontend/routes'),
	api = require('./api/api'),
	bodyParser = require('body-parser'),
	sassMiddleware = require('node-sass-middleware'),
	path = require('path'),
	_ = require('lodash'),
	Entities = require('html-entities').XmlEntities,
	async = require('async'),
	mongoose = require('mongoose'),
	compress = require('compression');



var app = express();
var entities = new Entities();

mongoose.connect('mongodb://localhost/smartbonds');

//Settings
app.set('views', path.normalize(__dirname + './../client/views'));
app.set('view engine', 'jade');
app.set('env','development');

//----Middleware----//

app.use(sassMiddleware({
	/* Options */
	src: path.join(__dirname,'/sass/'),
	dest: path.join(__dirname, '/css/'),
	debug: false,
	outputStyle: 'compressed',
	prefix:  ''  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(compress());
app.use(errorHandler);

//Set folder to find static resources
app.use(express.static(path.normalize(__dirname + './../client')));
app.use('/',routes);
app.use('/api',api);


function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render('error', { error: err });
}


module.exports = app;