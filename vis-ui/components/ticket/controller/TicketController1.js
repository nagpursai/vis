/**
 * http://usejsdoc.org/
 *//*
angular.module('ttsApp').controller('TicketController',['$scope','TicketService',function($scope,TicketService) {
	console.log("In TicketController start.");
	$scope.tickets ={};
	$scope.ticketService  = new TicketService();
	$scope.gridOptions.columnDefs = [
	                                 { name: 'name', enableCellEdit: true },
	                                 { name: 'age', enableCellEdit: true, type: 'number'},
	                                 { name: 'registered', displayName: 'Registered' , type: 'date'},
	                                 { name: 'address', displayName: 'Address', type: 'object'},
	                                 { name: 'address.city', enableCellEdit: true, displayName: 'Address (even rows editable)', cellEditableCondition: function($scope){return $scope.rowRenderIndex%2} }
	                                 { name: 'isActive', enableCellEdit: true, type: 'boolean'},
	                              ]
	
	// $scope.gridOptions = {};
	//  $scope.columnDefines = [];
	 $scope.columnDefines= [
	               {field: 'id', displayName: 'Id'},
	               {field: 'ticketType', displayName: 'Ticket Type'},
	               {field: 'ticketNumber', displayName: 'Ticket Number'},
	               {field: 'ticketStatus', displayName: 'Ticket Status'},
	               {field: 'remarks', displayName: 'Remarks'},
	               {name: 'edit', displayName: 'Edit', cellTemplate: '<button id="editBtn" type="button" class="btn-small" ng-click="edit(row.entity)" >Edit</button> '}
	             ];
	 
	 $scope.data = [];
	 $scope.ticketService.getTicketDetails(function (ticketData){
		 $scope.data = ticketData;

			*//** angular.forEach($scope.data[0], function(value, key){
			 	                            if(key.indexOf('$') != 0)
			 	                                $scope.columnDefines.push({ field: key, displayName: key, width:'200px'});
			 	                        }); **//*

		 console.log( $scope.data);
	 });
	 
	 $scope.TicketGridOptions = {
			 data: 'data',
			 columnDefs : [
										{
											field : 'id',
											displayName : 'Id'
										},
										{
											field : 'ticketType',
											displayName : 'Ticket Type'
										},
										{
											field : 'ticketNumber',
											displayName : 'Ticket Number'
										},
										{
											field : 'ticketStatus',
											displayName : 'Ticket Status'
										},
										{
											field : 'remarks',
											displayName : 'Remarks'
										},
										{
											name : 'edit',
											displayName : 'Edit',
											cellTemplate : '<a href ng-click="editTicket(row)"><span class="glyphicon glyphicon-edit"></span></a>',
											enableSorting :false
										},
										{
											name : 'delete',
											displayName : 'Delete',
											cellTemplate : '<a href ng-click="deleteTicket(row)"><span class="glyphicon glyphicon-trash"></span></a>',
											enableSorting :false
										} ],    
		      enablePaging: true,
		      showFooter: true,
		     pagingOptions: $scope.PRpagingOptions,
		     filterOptions: $scope.PRfilterOptions,      
		     enableRowSelection:false,
		     enableColumnResize:true
		    };
	 
	 
	*//**
	 * @ngdoc 
	 * @name 
	 * 
	 *//*
	$scope.editTicket= function (id) {
		console.log("Edit:"+id);
		
	};
	*//**
	 * @ngdoc 
	 * @name 
	 * 
	 *//*
	$scope.addTicket= function () {
		console.log("Add");
		
	};
	*//**
	 * @ngdoc 
	 * @name 
	 * 
	 *//*
	$scope.deleteTicket= function () {
		console.log("deleteTicket");
		
	};
}]);
*/