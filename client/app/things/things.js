'use strict';

angular.module('spsoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('things', {
        url: '/things',
        template: '<things></things>'
      });
  });
