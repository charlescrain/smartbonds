var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BondSchema = new Schema({
	owner: {
		type:String,
		required:true
	},
	parValue:{
		type:Number,
		required:true
	},
	interest:{
		type:Number,
		required:true
	},
	secondsToMaturity:{
		type:Number,
		required:true
	},
	frequency:{
		type:Number,
		required:true
	}
});
module.exports = mongoose.model('bond', BondSchema);