'use strict';

angular.module('uniStoreApp')
  .config(function($stateProvider) {
    $stateProvider.state('addItem', {
      url: '/additem',
      templateUrl: 'app/addItem/addItem.html',
      controller: 'AddItemCtrl',
      controllerAs: 'vm'
    });
  });
