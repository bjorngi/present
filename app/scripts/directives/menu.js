'use strict';

angular.module('presentApp')
  .directive('menu', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the menu directive');
      }
    };
  });
