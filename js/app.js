var app = angular.module('SuggestionBox', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
      .when('/home', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
      })
      .when('/suggestion/:id', {
          controller: 'SuggestionController',
          templateUrl: 'views/suggestion.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
  app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);