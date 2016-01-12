var app = angular.module( 'app' );



app.controller( 'RegisterCtrl', function($scope, $state, $http)  {
	$scope.user = {};

	$scope.submit = function(){
		// $scope.user
		$http.post('http://localhost:3001/api/user', $scope.user)
			.then( function( res ){
				console.log( res );
				// $state.go( 'register', {}, { reload:true } );
			}, function( error ){
				console.log( error );
				// state.go( 'login',{}, { reload:true } );
			});

	}

});