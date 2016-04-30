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

	result.saveOrUpdate = function(employee){
		employee.$save();
	}


	return result;
});