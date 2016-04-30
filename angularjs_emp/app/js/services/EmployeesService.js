empApp.factory('EmployeesService', function($http, $log, $q, $resource){
	
	var result = {};

	var resource = $resource('data/emp/:id', {id:"@id"});

/*
	result.getEmployeeById = function(empId){
		var deferred = $q.defer();
		resource.get({id: empId}, 		
			function success(resp){
				deferred.resolve(resp);
			},
			function error(resp){
				deferred.reject(resp);
			});		
		return deferred.promise;
	};
*/

	result.getEmployeeById = function(empId){
		return resource.get({id: empId});
	}

	result.getEmployees = function(){
		return resource.query();
	};

	result.create = function(employee){
		max = 1000;
		min = 10;
		employee.id = Math.floor(Math.random() * (max - min + 1)) + min;
		resource.save(employee);
	}

	result.update = function(employee){
		employee.$save();
	}


	return result;
});