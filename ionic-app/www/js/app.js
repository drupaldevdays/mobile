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

app.run(['$ionicPlatform', '$rootScope', '$state', '$stateParams', function($ionicPlatform, $rootScope, $state, $stateParams) {

  // Make the $state a property of the $rootScope;
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;

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

}]);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('app', {
        url: '/app',
         abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.drupal-news', {
        url: "/news",
        views: {
          'menuContent': {
            templateUrl: "templates/news.html",
            controller: 'NewsCtrl'
          }
        }
      })

   .state('app.drupal-news-detail', {
        url: "/news/:nodeId",
        views: {
          'menuContent': {
            templateUrl: "templates/news-det.html",
            controller: 'NewsDetCtrl'
          
          }
        }
      })
   /*    .state('app.drupal-news-detail', {
        url: "/news/:nodeId",
        views: {
          'menuContent': {
            templateUrl: "templates/news-det.html",
            controller: 'NewsDetCtrl'
          
          },
          "share":{
            template:"templates/share.html"
          }
        }
      })*/
/*       .state('app.drupal-share', {
        url: "/news/:nodeId",
        views: {
          'menuContent': {
            templateUrl: "templates/news-det.html",
            controller: 'ShareCtrl'
          }
        }
      })*/
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
      })
      .state('app.drupal-info', {
         url:"/info",
         views:{
          'menuContent':{
            templateUrl:"templates/info.html",
            control:'InfoCtrl'
          }
         }
       })

       .state('app.drupal-aboutApp', {
         url:"/aboutApp",
         views:{
           'menuContent':{
            templateUrl:"templates/aboutApp.html",
            control:'AboutAppCtrl'
          }
         }
       })
         .state('app.drupal-schedule', {
         url:"/schedule",
         views:{
           'menuContent':{
            templateUrl:"templates/schedule.html",
            control:'ScheduleCtrl'
          }
         }
       })

      .state('app.drupal-sponsors', {
         url:"/sponsors",
         views:{
          'menuContent':{
            templateUrl:"templates/sponsors.html",
            control:'SponsorsCtrl'
         }
         }
      })
      .state('app.drupal-usefullinks', {
         url:"/usefullinks",
         views:{
          'menuContent':{
            templateUrl:"templates/usefullinks.html",
            control:'UsefullinksCtrl'
          }
         }
       })

       .state('app.drupal-location', {
         url:"/location",
         views:{
          'menuContent':{
            templateUrl:"templates/location.html",
            control:'LocationCtrl'
          }
         }
       });

   

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/sessions');
  });
