var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {
		type:String,
		required:true
	},
	address: {
		type:String,
		required:true
	},
	coupons: [{type:Schema.Types.ObjectId, ref:'Coupon'}]
});
module.exports = mongoose.model('user', UserSchema);