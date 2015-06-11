'use strict';

// Declare app level module which depends on filters, and services

angular.module('citiesUiAppp', [
  'ngResource',
  'ui.router',
  'controllers',
  'filters',
  'services',
  'directives'
])
.constant('appConfiguration', {
    citiesApiUrl: window.location.protocol + '//' + window.location.host + '/proxy'
  })
.config(function ($stateProvider, $urlRouteProvider) {
  $urlRouteProvider.otherwise('cities');
  $stateProvider.state('cities', {
    url:'/cities',
    controller:'CitiesController',
    templateUrl:'views/cities.jade'
  });
});
