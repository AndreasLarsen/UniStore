'use strict';

angular.module('uniStoreApp')
  .config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'app/homepage/homepage.html',
        controller: 'HomepageController',
        controllerAs: 'vm'
    })
});

