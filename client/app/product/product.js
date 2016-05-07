'use strict';

angular.module('spsoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product', {
        url: '/product',
        template: '<product></product>'
      });
  });
