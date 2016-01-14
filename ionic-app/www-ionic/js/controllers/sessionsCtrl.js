app_controllers.controller('SessionsCtrl', ['$scope', '$rootScope', 'DrupalSessionsService', function ($scope, $rootScope, DrupalSessionsService) {

  // Get All Sessions
  DrupalSessionsService.all().then(
    function(response) {
      console.log(response);
      $scope.sessions = response;
      console.log($scope.sessions);
    },
    function(error) {
      console.log(error);
      $scope.error = error;
    }
  );

}]);