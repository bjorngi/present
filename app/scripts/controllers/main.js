'use strict';

angular.module('presentApp')
  .controller('MainCtrl', function ($scope, $rootScope, db) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.task = null;
    $scope.working = false;

    $scope.makeTask = function() {
      var newTask = new TodoTxtItem($scope.task);
      $scope.working = true;
      db.makeTask(newTask)
        .then(function(res) {
          $scope.$apply(function() {
            $scope.working = false;
            $scope.task = "";
            $rootScope.$broadcast("main.newTaskMade", res);
          });
        });
    }

  });
