app_controllers.controller('SessionDetCtrl', ['$scope', '$rootScope', '$stateParams', 'DrupalNodesService', 'drupal_instance',  function ($scope, $rootScope, $stateParams, DrupalNodesService, drupal_instance) {
  var endpoint = drupal_instance.baseUrl;

  var requestObject = {
    method  : 'GET',
    url     : endpoint + '/node/' + $stateParams.nodeId,
    params  : {
      '_format': 'json'
    }
  };

  // Get Single Session
  DrupalNodesService.get(requestObject).then(
    function (response) {
      $scope.session = response;
    },
    function (error) {
      $scope.error = error;
    }
  );
}]);
