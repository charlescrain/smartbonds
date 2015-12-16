var app = angular.module( 'app' );



app.controller( 'RegisterCtrl', function($scope, $, $http)  {
	$scope.user = {};

	$scope.submit = function submit(){
		$http.post('http://localhost:3002/api/user', user)
			.then( function( res ){
				console.log( res );
				// $state.go( 'register', {}, { reload:true } );
			}, function( error ){
				console.log( error );
				// state.go( 'login',{}, { reload:true } );
			});

	}

});