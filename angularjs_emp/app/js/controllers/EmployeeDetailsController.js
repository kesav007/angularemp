empApp.controller('EmployeeDetailsController', function($scope, $routeParams, EmployeesService){

	/*$scope.employee = EmployeesService.getEmployeeById($routeParams.empId)
	.then(function success(resp){
		console.log(resp);
		return resp;
	});
*/
	$scope.employee = {};
	
	if($routeParams.empId != 0){
		$scope.employee = EmployeesService.getEmployeeById($routeParams.empId);	
	}

	$scope.update = function(employee){
		if(!employee.id){
			EmployeesService.create(employee);
		}
		else{
			EmployeesService.update(employee);	
		}
		return employee;
	};

	$scope.cancel = function(){
		window.location.href = "#/employees";
	}
});