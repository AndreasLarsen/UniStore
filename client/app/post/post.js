'use strict';

angular.module('uniStoreApp')
  .config(function($stateProvider) {
    $stateProvider.state('post', {
        url: '/post',
        templateUrl: 'app/post/post.html',
        controller: 'postController'
      })
  });