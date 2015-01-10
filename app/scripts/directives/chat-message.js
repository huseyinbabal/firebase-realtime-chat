'use strict';

/**
 * @ngdoc directive
 * @name ngRealtimeChatApp.directive:chatMessage
 * @description
 * # chatMessage
 */
angular.module('ngRealtimeChatApp')
  .directive('chatMessage', function () {
    return {
      templateUrl: 'views/directive/chat-message.html',
      restrict: 'E',
      scope: {
        message: '='
      }
    };
  });
