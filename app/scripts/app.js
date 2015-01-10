'use strict';

/**
 * @ngdoc overview
 * @name ngRealtimeChatApp
 * @description
 * # ngRealtimeChatApp
 *
 * Main module of the application.
 */
angular
  .module('ngRealtimeChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'YOUR_FIREBASE_URL')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/signin.html',
        controller: 'AuthCtrl'
      })
      .otherwise({
        redirectTo: '/chat'
      });
  })
  .run(['$rootScope', '$location', 'AuthFactory', function($rootScope, $location, AuthFactory) {

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
      if (!AuthFactory.isLoggedIn()) {
        // no logged user, redirect to /signin
        if ( next.templateUrl === "views/signin.html") {
        } else {
          $location.path("/signin");
        }
      }
    });
  }]);
