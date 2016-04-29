empApp.controller('EmployeeDetailsController', function($scope, $routeParams, EmployeesService){

	$scope.employee = EmployeesService.getEmployeeById($routeParams.empId)
	.then(function success(resp){
		console.log(resp);
		return resp;
	});

	// $scope.employee = EmployeesService.getEmployeeById($routeParams.empId);
	
	$scope.update = function(employee){
		console.log(employee);
		// EmployeesService.saveOrUpdate(employee);
	};
});