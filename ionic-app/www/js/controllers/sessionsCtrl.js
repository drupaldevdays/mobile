app_controllers.controller('SessionsCtrl', ['$scope', '$rootScope', 'DrupalSessionsService', function ($scope, $rootScope, DrupalSessionsService) {

  // Get All Sessions
  DrupalSessionsService.all().then(
    function(response) {
      $scope.sessions = response;
    },
    function(error) {
      $scope.error = error;
    }
  );

}]);