// via: http://docs.angularjs.org/tutorial/step_07
var app = angular.module('PURPLE_SLIDE_App', 
  ['ngRoute', 'PURPLE_SLIDE_Controllers']
);

// define routes
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.

    when('/', {
      templateUrl: 'partials/slideBase.html',
      controller: 'page1Ctl'
    }).

    when('/page1', {
      templateUrl: 'partials/slideBase.html',
      controller: 'page1Ctl'
    }).

    when('/page2', {
      templateUrl: 'partials/slideBase.html',
      controller: 'page2Ctl'
    }).

    otherwise({
      redirectTo: '/'
    });

}]);