'use strict';

angular.module('presentApp')
  .controller("TaskListController", function($scope, db) {
    $scope.tasks = null;

    $scope.$on("main.newTaskMade", function(event, data) {
      $scope.tasks.unshift(data);
    });


    var getTasks = function() {
      db.getTasks()
        .then(function (res) {
          $scope.$apply(function () {
            $scope.tasks = res;
          })
        })
    };

    getTasks();

  })
  .directive('taskList', function () {
    return {
      templateUrl: "views/partials/taskList.html"
    };
  })
  .directive("projectTaskList", function() {
    return {
      templateUrl: 'views/partials/projectTaskList.html'
    };

  });

