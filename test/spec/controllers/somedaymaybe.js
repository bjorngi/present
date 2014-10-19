'use strict';

describe('Controller: SomedaymaybeCtrl', function () {

  // load the controller's module
  beforeEach(module('presentApp'));

  var SomedaymaybeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SomedaymaybeCtrl = $controller('SomedaymaybeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
