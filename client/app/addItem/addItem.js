'use strict';

angular.module('uniStoreApp')
  .config(function($stateProvider) {
    $stateProvider.state('addItem', {
      url: '/addItem',
      template: 'app/addItem/addItem.html',
      controller: 'addItemController'
    });
  });

