/**
 * @ngdoc service
 * @name LoginService
 * @description this use for login service
 */
angular.module('visApp').factory('LoginService',
		[ '$q', 'Restangular','$timeout', function($q, Restangular, $timeout) {
			function LoginService(login) {
				if (login) {
					this.setData = login;
				}
			}
			LoginService.prototype = {
				setData : function(login) {
					angular.extend(this, login);
				},
				doLogin : function(loginInfo, callback) {
					Restangular.setBaseUrl("http://localhost:8000/visrest/user");
					var result;
					$timeout(function() {
						Restangular.all('login').post(loginInfo).then(function(dashboard){
							result = true;
							callback(result);
						}, function(){
							$scope.result = false;
							console.log("Login Fail");
						})
					}, 1000);
				},
				doLogout : function(loginInfo) {
					baseUrl + "/user/hellotest";
					var login = new Login(); // create resource obj.
					angular.extend(login, loginInfo);
					var defer = $q.defer();
					login.$get(function() {
						defer.resolve();
					});
					return defer.promise;
				}
			};
			return LoginService;
		} ]);