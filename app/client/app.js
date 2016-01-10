var app = angular.module('app',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('login',{
			url:'/login',
			templateUrl:'/login'
		})
		.state('register',{
			url:'/register',
			templateUrl:'/register'
		})
		.state('home',{
			url:'/',
			templateUrl:'/home'
		})
		.state('newBond',{
			url:'/newBond',
			templateUrl:'/newBond'
		})
});