var app = angular.module( 'app' );



app.controller( 'HomeCtrl', function($scope,$http)  {
	$scope.bond = {}; 

	$http.get('http://localhost:3001/api/bond')
			.then( function( res ){
				console.log( res );

				// $state.go( 'register', {}, { reload:true } );
			}, function( error ){
				console.log( error );
				// state.go( 'login',{}, { reload:true } );
			});
});