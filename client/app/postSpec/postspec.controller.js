'use strict'

angular.module('uniStoreApp')
.controller('PostSpecCtrl', function ($scope, $http, $stateParams) {
  var id = $stateParams.id;
  $scope.item = {};
  $scope.id = $stateParams.id;
  console.log($scope.id);
  console.log('hi');
  $http.get('/api/items/' + $scope.id).then(function(res){
    $scope.item = res.data;

    console.log($scope.item);
  });

	// $scope.a = function() {
	// 	alert("Hello");
	// }
	// $scope.save = function() {
	// 	var newItem = {name: $scope.name,
	// 								description: $scope.description,
	// 								image: $scope.image
	// 		};
	// 	$http.post('/api/items/', newItem, function(err, something) {
	// 		//Make more elegant pop up
	// 		debugger
  //
  //
  //
  //
	// 	});
	// 	$scope.name ='';
	// 	$scope.description ='';
	// 	$scope.image ='';
  //
	// }



})
