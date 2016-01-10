var app = angular.module( 'app' );



app.controller( 'HomeCtrl', function($scope,$http)  {
	$scope.bonds = []; 
	$scope.coupons = [];
	$scope.user = {};
	$scope.user.address = 'test1';

	$http.get('http://localhost:3001/api/bond')
			.then( function( res ){
				console.log( res );
				$scope.bonds = res.data;

				// $state.go( 'register', {}, { reload:true } );
			}, function( error ){
				console.log( error );
				// state.go( 'login',{}, { reload:true } );
			});
	$http.get('http://localhost:3001/api/coupon/owner/test1')
			.then( function( res ){
				console.log( res );
				$scope.coupons = res.data;

				// $state.go( 'register', {}, { reload:true } );
			}, function( error ){
				console.log( error );
				// state.go( 'login',{}, { reload:true } );
			});

	$scope.purchaseBond = function(bond) {
		var coupon = {
			owner:$scope.user.address,
			timePurchased:(new Date).getTime()/1000,
			bond:bond._id
		};
		console.log(coupon);
		$http.post('http://localhost:3001/api/coupon', coupon)
			.then(function(res){
				console.log(res);
			},function(error){
				console.log(error);
			});
	};
});