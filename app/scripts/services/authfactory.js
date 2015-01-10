'use strict';

/**
 * @ngdoc service
 * @name ngRealtimeChatApp.AuthFactory
 * @description
 * # AuthFactory
 * Factory in the ngRealtimeChatApp.
 */
angular.module('ngRealtimeChatApp')
  .factory('AuthFactory', ['$rootScope', '$localStorage', '$firebase', 'FIREBASE_URL', function ($rootScope, $localStorage, $firebase, FIREBASE_URL) {

    var ref = new Firebase(FIREBASE_URL);

    return {
      isLoggedIn: function() {
        return typeof $localStorage.user != 'undefined';
      },
      logout: function (success) {
        delete $localStorage.user;
        success();
      },
      user: function() {
        return $localStorage.user;
      },
      signin: function(user, callback) {
        ref.authWithPassword({
          email: user.email,
          password: user.password
        }, function(error, authData) {
          $localStorage.user = authData;
          callback(error, authData);
        })
      }
    };
  }]);
