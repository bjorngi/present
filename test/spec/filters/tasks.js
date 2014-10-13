'use strict';

describe('Filter: tasks', function () {

  // load the filter's module
  beforeEach(module('presentApp'));

  // initialize a new instance of the filter before each test
  var tasks;
  beforeEach(inject(function ($filter) {
    tasks = $filter('tasks');
  }));

  it('should return the input prefixed with "tasks filter:"', function () {
    var text = 'angularjs';
    expect(tasks(text)).toBe('tasks filter: ' + text);
  });

});
