'use strict';

/**
 * @ngdoc function
 * @name ngRealtimeChatApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the ngRealtimeChatApp
 */
angular.module('ngRealtimeChatApp')
  .controller('AuthCtrl', ['$scope', 'AuthFactory', '$location', '$timeout', function ($scope, AuthFactory, $location, $timeout) {
    $scope.signin = function() {
      AuthFactory.signin($scope.user, function(err, result) {
        if (!err) {
          $timeout(function() {
            $location.path('/chat');
          },1);
        } else {

        }
      })
    }
  }]);
