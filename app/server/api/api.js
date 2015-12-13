var router = require('express').Router();

// api router mounts other routers to the correct url

router.use('/bond',require('./bond/bondRoutes'));
router.use('/user',require('./user/userRoutes'));
router.use('/coupon',require('./coupon/couponRoutes'));


module.exports = router;