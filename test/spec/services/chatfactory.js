'use strict';

describe('Service: ChatFactory', function () {

  // load the service's module
  beforeEach(module('ngRealtimeChatApp'));

  // instantiate service
  var ChatFactory;
  beforeEach(inject(function (_ChatFactory_) {
    ChatFactory = _ChatFactory_;
  }));

  it('should do something', function () {
    expect(!!ChatFactory).toBe(true);
  });

});
