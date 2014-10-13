'use strict';

angular.module('presentApp')
  .controller('MainCtrl', function ($scope, $rootScope, db, todotxtParse) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.search = null;

    $scope.task = null;
    $scope.working = false;

    $scope.makeTask = function() {
      $scope.working = true;

      todotxtParse.parse($scope.task)
        .then(function (newTask) {
          saveTask(newTask);
        })
        .catch(function (err) {
          console.error(err);
        });
    };



    var saveTask = function(newTask) {
      db.makeTask(newTask)
        .then(function(res) {
            todotxtParse.taskToSortUrl(res)
              .then(function(task) {
                $scope.$apply(function() {
                  $scope.task = "";
                  $rootScope.$broadcast("main.newTaskMade", task);
                  $scope.working = false;
                })
              .catch(function(err) {
                console.log(err);
                $scope.working = false;
              })

          });
        });
    }

  });
