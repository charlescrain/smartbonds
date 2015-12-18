var app = angular.module('app',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
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
			templateUrl:'/index'
		})
		.state('newBond',{
			url:'/newBond',
			templateUrl:'/newBond'
		})
});