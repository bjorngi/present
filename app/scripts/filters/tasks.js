'use strict';

angular.module('presentApp')
  .filter('tasks', function () {
    return function (input) {
      return 'tasks filter: ' + input;
    };
  });
