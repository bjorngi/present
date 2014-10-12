'use strict';

angular.module('presentApp')
  .controller("ProjectListController", function($scope) {
    $scope.projects = [
      {
        "name": "present"
      },
      {
        "name": "past"
      },
      {
        "name": "future"
      }
  ]
  })
  .directive('projectList', function () {
    return {
      templateUrl: 'views/partials/projectList.html'
    };
  });
