empApp.controller('EmployeesController', function($scope, EmployeesService){
	$scope.employees =  EmployeesService.getEmployees();
});