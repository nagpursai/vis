/**
 * http://usejsdoc.org/
 */
angular.module('visApp').controller(
		'VehicleController',
		[
				'$scope',
				'VehicleService',
				'NgTableParams',
				 function($scope, TicketService, NgTableParams) {
					console.log("In VehicleController start.");
			
					var self = this;
					$scope.data = []; 
					$scope.VehicleService = new VehicleService();
					$scope.ticketService.getTicketDetails(function(
							vehicleData) {
						$scope.data = vehicleData;
						var data = $scope.data;
						console.log($scope.data);
						$scope.ticketList = new NgTableParams({count:$scope.data.length}, {filterDelay: 0,data});
					});
					$scope.ticket = {};
					/**
					 * @ngdoc
					 * @name
					 * 
					 */
					$scope.addTicket = function() {
						console.log("Add");
						$scope.data.push({id: '', ticketType:'', ticketNumber:'', ticketStatus:'', remarks:''});
						var data = $scope.data;
						console.log($scope.data);
						$scope.ticketList = new NgTableParams({count:data.length}, {filterDelay: 0,data});
						
					};
					/**
					 * @ngdoc
					 * @name
					 * 
					 */
					$scope.editTicket = function(id) {
						console.log("Edit:" + id);

					};
					/**
					 * @ngdoc
					 * @name
					 * 
					 */
					function resetRow(row, rowForm){
					      row.isEditing = false;
					      rowForm.$setPristine();
					      tableTracker.untrack(row);
					      return _.findWhere(originalData, function(r){
					        return r.id === row.id;
					      });
					    }
					
					/**
					 * @ngdoc
					 * @name
					 * 
					 */
					$scope.updateTicket = function(row, rowForm) {
						console.log(row);
						var originalRow = resetRow(row, rowForm);
					     angular.extend(originalRow, row);

					};
					/**
					 * @ngdoc
					 * @name
					 * 
					 */
					$scope.deleteTicket = function(row) {
						var data = $scope.data;
						console.log($scope.data);
						data.splice(row.id,row.id);
						$scope.ticketList = new NgTableParams({count:data.length}, {filterDelay: 0,data});
						
						
						
						/*
						console.log("deleteTicket="+row.id);
						 _.remove(ticketList.settings.dataset, function(item) {
						        return row === item;
						      });
						      ticketList.reload().then(function(data) {
						        if (data.length === 0 && ticketList.total() > 0) {
						          ticketList.page(ticketList.page() - 1);
						          ticketList.reload();
						        }
						      });*/

					};
					/**
					 * @ngdoc
					 * @name
					 * 
					 */
					$scope.cancelTicket = function(row, rowForm) {
						console.log("deleteTicket="+row.id);
						var originalRow = resetRow(row, rowForm);
					    angular.extend(row, originalRow);

					};
				} ]);
