'use strict';

/**
 * @ngdoc function
 * @name ngRealtimeChatApp.controller:ChatctrlCtrl
 * @description
 * # ChatctrlCtrl
 * Controller of the ngRealtimeChatApp
 */
angular.module('ngRealtimeChatApp')
  .controller('ChatCtrl', ['$rootScope', '$scope', 'AuthFactory', 'ChatFactory', '$location', '$timeout',
    function ($rootScope, $scope, AuthFactory, ChatFactory, $location, $timeout) {
    $scope.messages = ChatFactory.getMessages();
    $scope.sendMessage = function () {
      var message = {
        text: $scope.messageText,
        time: new Date(),
        user: AuthFactory.user()
      };

      ChatFactory.sendMessage(message);
      $scope.messages = ChatFactory.getMessages();
      $scope.messageText = '';
    }

    $scope.logout = function() {
      AuthFactory.logout(function() {
        $timeout(function(){
          $location.path('/signin');
        },1);

      })
    }
  }]);
