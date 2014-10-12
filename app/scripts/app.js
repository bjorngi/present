'use strict';

angular
  .module('presentApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    BaasBox.setEndPoint("http://baasbox.tihlde.org:10000");
    BaasBox.appcode = "1234567890";

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/project/:project', {
        templateUrl: 'views/projectView.html',
        controller: 'ProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
