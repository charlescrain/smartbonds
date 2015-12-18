var app = angular.module( 'app' );



app.controller( 'NewBondCtrl', function($scope, $state, $http)  {
	$scope.bond = {};

	$scope.submit = function(){
		$http.post('http://localhost:3001/api/bond', $scope.bond)
			.then( function( res ){
				console.log( res );
				// $state.go( 'register', {}, { reload:true } );
			}, function( error ){
				console.log( error );
				// state.go( 'login',{}, { reload:true } );
			});

	}

});