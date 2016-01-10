var app = angular.module( 'app' );



app.controller( 'NewBondCtrl', function($scope, $state, $http)  {
	$scope.bond = {};
	$scope.submitted = false;

	$scope.submitFinal = function(){
		$http.post('http://localhost:3001/api/bond', $scope.bond, {test:'sup'})
			.then( function( res ){
				console.log( res );
				// $state.go( 'register', {}, { reload:true } );
			}, function( error ){
				console.log( error );
				// state.go( 'login',{}, { reload:true } );
			});
	};
	$scope.submit = function() {
		$scope.submitted = true;
	};


});