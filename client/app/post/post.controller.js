'use strict'

angular.module('uniStoreApp')
.controller('postController', function ($scope, $http) {
	$scope.item = {};

	$scope.a = function() {
		alert("Hello");
	}
	$scope.save = function() {
		$http.post('/api/items/', $scope.item, function(err, something) {
			//Make more elegant pop up
			debugger
			console.log(err)
			console.log(something)
			alert("Your item has been posted");

		})
	}



});
