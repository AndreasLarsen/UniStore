'use strict';

angular.module('uniStoreApp')
  .config(function($stateProvider) {
    $stateProvider.state('postSpec', {
        url: '/posts/:id',
        templateUrl: 'app/postSpec/postSpec.html',
        controller: 'PostSpecCtrl',
        controllerAs: 'vm'
      })


  });
