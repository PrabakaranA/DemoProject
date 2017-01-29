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
    'ngAnimate',
    'ui.bootstrap',
    'picardy.fontawesome',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.edit',
    'ui.grid.moveColumns',
    'ui.router',
    'ui.utils',
    'ui.select',
    'ui.calendar',
    'angularMoment',
    'ngDropdowns',
    'angularFileUpload'
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
      url: '/register',
      controller: 'RegisterCtrl',
      templateUrl: 'views/register.html',
      params :{
        'prerequisite' : []
      }
    });
  }]);