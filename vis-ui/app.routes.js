/**
 * http://usejsdoc.org/
 */
angular.module('ttsApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function($stateProvider, $urlRouterProvider, $locationProvider){
		console.log('In config');
		$locationProvider.html5Mode({
			   enabled: true,
			   requireBase: false			
		});
		
		$urlRouterProvider.otherwise("login");
		$stateProvider
		.state('login', {
			url:'/login',
			templateUrl: 'components/login/views/login-form.html',
			controller: 'LoginController'
		})
		.state('dashboard', {
			url:'/dashboard',
			templateUrl: 'components/dashboard/dashboard3.html',
			controller: 'TicketController'
		});
		
	}]);