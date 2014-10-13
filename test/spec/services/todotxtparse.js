'use strict';

describe('Service: todotxtParse', function () {

  // load the service's module
  beforeEach(module('presentApp'));

  // instantiate service
  var todotxtParse;
  beforeEach(inject(function (_todotxtParse_) {
    todotxtParse = _todotxtParse_;
  }));

  it('should do something', function () {
    expect(!!todotxtParse).toBe(true);
  });

});
