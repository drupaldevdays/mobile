app_controllers.controller('SessionDetCtrl', ['$scope', '$rootScope', '$stateParams', 'DrupalSessionsService', function ($scope, $rootScope, $stateParams, DrupalSessionsService) {

  // Get Single Session
  DrupalSessionsService.get($stateParams.nodeId).then(
    function(response) {
      $scope.session = response;
    },
    function(error) {
      console.log(error);
      $scope.error = error;
    }
  );

}]);