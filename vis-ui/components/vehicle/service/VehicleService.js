/**
 * http://usejsdoc.org/
 */
angular.module('visApp').factory('TicketService',
		['$q', 'Restangular','$timeout', function($q, Restangular, $timeout) {
	var url = "http://localhost:7000/visrest/user/login";
	function TicketService(){
		console.log("In Service constructor: ");
		
	}
	TicketService.prototype = {
			getTicketDetails : function(callback) {
				Restangular.setBaseUrl("http://localhost:7000/visrest/ticket");
				$timeout(function() {
					Restangular.all('tickets').getList().then(function(tickets){
						callback(tickets);
					});
				},1000);
			}
	};
	return TicketService;
}]);