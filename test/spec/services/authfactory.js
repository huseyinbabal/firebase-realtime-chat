'use strict';

describe('Service: AuthFactory', function () {

  // load the service's module
  beforeEach(module('ngRealtimeChatApp'));

  // instantiate service
  var AuthFactory;
  beforeEach(inject(function (_AuthFactory_) {
    AuthFactory = _AuthFactory_;
  }));

  it('should do something', function () {
    expect(!!AuthFactory).toBe(true);
  });

});
