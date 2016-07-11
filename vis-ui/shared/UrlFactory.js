/**
 * http://usejsdoc.org/
 */
angular.module('visApp').factory('UrlFactory',['$q',function($q){
	console.log("In service");
	var url = "http://localhost:7000/ttsrest/user/login";
	function LoginService(login){
		console.log("In Service constructor: "+login);
		if(login){
			this.setData = login;
		}
	}
	LoginService.prototype = {
			setData: function(login){
				angular.extend(this,login);
				console.log("inPrototye:"+login);
			},
			doLogin : function(login) {
				console.log("In service login method:"+login);
				return true;
			}
	};
	return LoginService;
}]);