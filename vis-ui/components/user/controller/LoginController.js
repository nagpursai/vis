/**
 * @ngdoc controller
 * @name LoginController
 * @description this use for login 
 */
angular.module('visApp').controller('LoginController',['$scope','LoginService','$state', function($scope, LoginService, $state, $stateParams,$location) {
	$scope.login = {};
	$scope.loginService  = new LoginService();
	/**
	 * @ngdoc function
	 * @name LoginController#doLogin
	 * @methodOf LoginController
	 * @description do the login with crediential.
	 */
	$scope.doLogin= function () {
		console.log($scope.login);
		$scope.loginService.doLogin($scope.login, function (response){
			if(response){
				$state.go('dashboard');
			}
		});
	};
}]);