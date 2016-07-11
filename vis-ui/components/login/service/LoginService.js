/**
 * New node file
 */
angular.module('ttsApp').factory('LoginService',
		[ '$q', 'Restangular','$timeout', function($q, Restangular, $timeout) {
			//var baseUrl = "http://localhost:7000/ttsrest/user/login";
			var baseUrl = "/ttsrest/user/login";
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
					Restangular.setBaseUrl("http://localhost:7000/ttsrest/user");
					var result;
					$timeout(function() {
						Restangular.all('login').post(loginInfo).then(function(ticket){
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