'use strict';

describe('Directive: locationList', function () {

  // load the directive's module
  beforeEach(module('presentexistlifeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<location-list></location-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the locationList directive');
  }));
});
