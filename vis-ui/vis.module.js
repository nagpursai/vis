/**
 * Created by ajay.kumar
 */

/**
 * @ngdoc object
 * @name 
 * @description tts web app depends on the following module:<br>
 		1.) Angular ui router for all the state change. https://github.com/angular-ui/ui-router  <br>
 		2.) Restangular for all server layer REST calls. https://github.com/mgonto/restangular  <br>
        3.) raw.navigation : For left panel for navigating between modules of a project. <br>
        4.) raw.generation : For all pre-defined and published reports. <br>
        5.) ng-grid : For all GRIDs on RAW project. http://angular-ui.github.io/ui-grid  <br>
 */
(function(){
	'use strict';
	var visApp = angular.module('visApp',['ui.router','ngSanitize','restangular','ui.grid','ui.grid.edit','ngTable']);
	
	
})();
