var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	address: {
		type:String,
		required:true
	},
	coupons: {
		type: Schema.Types.ObjectId, ref:'Coupon',
		required:true
	}
});
module.exports = mongoose.model('user', UserSchema);