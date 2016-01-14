// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('drupal8-ionic', [
  'ionic',
  'drupal8-ionic.configuration',
  'drupal8-ionic.filters',
  'drupal8-ionic.controllers',
  'drupal8-ionic.services',
]);

app.run(['$ionicPlatform', '$rootScope', '$state', function($ionicPlatform, $rootScope, $state ) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  $rootScope.$state = $state;

}]);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })
    .state('app.drupal-sessions', {
      url: "/sessions",
      views: {
        'menuContent': {
          templateUrl: "templates/sessions.html",
          controller: 'SessionsCtrl'
        }
      }
    })

    .state('app.drupal-session', {
      url: "/session/:nodeId",
      views: {
        'menuContent': {
          templateUrl: "templates/session-det.html",
          controller: 'SessionDetCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
