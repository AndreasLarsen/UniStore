'use strict'

angular.module('uniStoreApp')
.controller('addItemController', function ($scope) {
	$scope.item = {};

	function save() {
		$http.post('/api/items/add', $scope.item, function() {
			//Make more elegant pop up
			alert("Your item has been posted");

		})
	}



});
