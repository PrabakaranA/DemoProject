'use strict';

/**
 * @ngdoc overview
 * @name jwcmarineApp
 * @description
 * # jwcmarineApp
 *
 * Main module of the application.
 */
var app = angular
  .module('jwcmarineApp', [
    'ui.router',
    'ui.utils',
    'ui.select'
  ]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/dashboard');
    $stateProvider.state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'views/tmpl/app.html'
    })
    .state('app.dashboard', {
      url: '/dashboard',
      controller: 'MainCtrl',
      templateUrl: 'views/dashboard.html',
    })
    //mail
    .state('app.register', {
      abstract: true,
      url: '/register',
      controller: 'AboutCtrl',
      templateUrl: 'views/register.html'
    });
  }]);