'use strict';

describe('Service: mod', function () {

  // load the service's module
  beforeEach(module('RedditClone'));

  // instantiate service
  var mod;
  beforeEach(inject(function (_mod_) {
    mod = _mod_;
  }));

  it('should do something', function () {
    expect(!!mod).toBe(true);
  });

});
