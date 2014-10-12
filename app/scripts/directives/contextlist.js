'use strict';

angular.module('presentApp')
  .controller('ContextListController', function($scope){
    $scope.contexts =
    [
      {
        "name": "home",
        "geolocation": 150
      },
      {
        "name": "grocery",
        "geolocation": 150
      },
      {
        "name": "school",
        "geolocation": 150
      }]
  })
  .directive('locationList', function () {
    return {
      templateUrl: '../../views/partials/contextList.html'
    };
  });
