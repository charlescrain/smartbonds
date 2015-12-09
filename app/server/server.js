var express = require('express'),
	routes = require('./routes/routes'),
	bodyParser = require('body-parser'),
	sassMiddleware = require('node-sass-middleware'),
	path = require('path'),
	_ = require('lodash'),
	Entities = require('html-entities').XmlEntities,
	async = require('async'),
	compress = require('compression');


var app = express();
var entities = new Entities();

//Set View Engine
app.set('views', path.normalize(__dirname + './../client/views'));
app.set('view engine', 'jade');

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

//Set folder to find static resources
app.use(express.static(path.normalize(__dirname + './../client')));
app.use('/',routes);

module.exports = app;