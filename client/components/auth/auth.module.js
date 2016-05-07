'use strict';

angular.module('spsoApp.auth', [
  'spsoApp.constants',
  'spsoApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
