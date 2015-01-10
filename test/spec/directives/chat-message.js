'use strict';

describe('Directive: chatMessage', function () {

  // load the directive's module
  beforeEach(module('ngRealtimeChatApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chat-message></chat-message>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chatMessage directive');
  }));
});
