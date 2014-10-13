'use strict';

angular.module('presentApp')
  .controller("ProjectListController", function($scope) {
    $scope.projects = [
      {
        "name": "present"
      },
      {
        "name": "math"
      },
      {
        "name": ""
      }
  ]
  })
  .directive('projectList', function () {
    return {
      templateUrl: 'views/partials/projectList.html'
    };
  });
