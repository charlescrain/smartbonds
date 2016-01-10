var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CouponSchema = new Schema({
	owner:{
		type:String,
		required:true
	},
	timePurchased:{
		type:Number,
		required:true
	},
	bond: {type:Schema.Types.ObjectId, ref:'Bond'}
	// need to implement multiple coupons
	// numberPurchased:{
	// 	type:Number,
	// 	required:true
	// }
});

module.exports = mongoose.model('Coupon', CouponSchema);