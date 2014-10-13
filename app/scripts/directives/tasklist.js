'use strict';

angular.module('presentApp')
  .controller("TaskListController", function($scope, db, todotxtParse) {
    $scope.tasks = null;
    $scope.search = null;

    $scope.$on("main.newTaskMade", function(event, data) {
      $scope.tasks.unshift(data);
    });

    $scope.setFilter = function(filter) {
      $scope.search = filter;
    };

    $scope.completeTask = function(task) {
      $scope.tasks.splice($scope.tasks.indexOf(task), 1);
      db.completeTask(task)
        .then(function(res) {

        })
    };



    var getTasks = function() {
      db.getTasks()
        .then(function (res) {
          toSortUrl(res);
        })
    };

    var toSortUrl = function(tasks) {
      todotxtParse.tasksToSortUrl(tasks)
        .then(function(res) {
          $scope.$apply(function(){
            $scope.tasks = res;
          })
        })
        .catch(function(err) {
          console.log(err);
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

