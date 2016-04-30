'use strict';

var empApp = angular.module('empApp',['ngResource'])
.config(function($routeProvider){
	$routeProvider.when('/', {
		controller : 'EmployeesController',
		templateUrl : '/js/templates/Employees.html'
	});
	$routeProvider.when('/employees', {
		controller : 'EmployeesController',
		templateUrl : '/js/templates/Employees.html'
	});
	$routeProvider.when('/employee/:empId', {
		controller : 'EmployeeDetailsController',
		templateUrl : '/js/templates/EmployeeDetails.html'
	});
});