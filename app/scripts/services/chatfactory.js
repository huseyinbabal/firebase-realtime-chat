'use strict';

/**
 * @ngdoc service
 * @name ngRealtimeChatApp.ChatFactory
 * @description
 * # ChatFactory
 * Factory in the ngRealtimeChatApp.
 */
angular.module('ngRealtimeChatApp')
  .factory('ChatFactory', ['$http', 'FIREBASE_URL', '$firebase', function ($http, FIREBASE_URL, $firebase) {

    var ref = new Firebase(FIREBASE_URL);
    var messages = $firebase(ref);
    return {
      sendMessage: function(message) {
        messages.$push(message)
      },
      getMessages: function() {
        return messages.$asArray();
      }
    };
  }]);
