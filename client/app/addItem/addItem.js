'use strict';

angular.module('uniStoreApp')
  .config(function($stateProvider) {
    $stateProvider.state('addItem', {
        url: '/addItem',
        templateUrl: 'app/addItem/addItem.html',
        controller: 'addItemController',
        controllerAs: 'vm'
      })
  });