'use strict'

angular.module('uniStoreApp')
.controller('postController', function ($scope) {
	$scope.item = {};

	$scope.a = function() {
		alert("Hello");
	}
	$scope.save = function() {
		debugger
		alert("I'm Here");
		// $http.post('/api/items/', $scope.item, function() {
		// 	//Make more elegant pop up
		// 	alert("Your item has been posted");

		// })
	}



});
