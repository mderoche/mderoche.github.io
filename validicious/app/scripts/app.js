'use strict';

/**
 * @ngdoc overview
 * @name validiciousSiteApp
 * @description
 * # validiciousSiteApp
 *
 * Main module of the application.
 */
angular
  .module('validiciousSiteApp', [
    'ngRoute',
    'hljs'
  ])
  .config(function ($routeProvider, hljsServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/docs', {
        templateUrl: 'views/docs.html',
        controller: 'DocsCtrl'
      })
      .when('/rules', {
        templateUrl: 'views/rules.html',
        controller: 'RulesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    hljsServiceProvider.setOptions({
      tabReplace: '  '
    });
  });
