'use strict';

angular.module('uniStoreApp.auth', ['uniStoreApp.constants', 'uniStoreApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
