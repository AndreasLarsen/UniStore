'use strict'

angular.module('uniStoreApp')
.controller('postController', function ($scope, $http) {




	$scope.a = function() {
		alert("Hello");
	}
	$scope.save = function() {
		var newItem = {name: $scope.name,
				description: $scope.description,
				image: $scope.image
		};
		$http.post('/api/items/', newItem, function(err, something) {
			//Make more elegant pop up
			debugger
			console.log(err)
			console.log(something)
			alert("Your item has been posted");



		});
		$scope.name ='';
		$scope.description ='';
		$scope.image ='';
	}



})
