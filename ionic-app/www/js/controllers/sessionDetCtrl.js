app_controllers.controller('SessionDetCtrl', ['$scope', '$rootScope', '$stateParams', 'DrupalNodesService', 'drupal_instance',  function ($scope, $rootScope, $stateParams, DrupalNodesService, drupal_instance) {
  var endpoint = drupal_instance.baseUrl;

  var requestObject = {
    method  : 'GET',
    url     : endpoint + '/rest/session/' + $stateParams.nodeId + '/json',
    params  : {
      '_format': 'json'
    }
  };

  // Get Single Session
  DrupalNodesService.get(requestObject).then(
    function (response) {
      var session = response[0];

      session.speakers = JSON.parse(session.speakers);

      $scope.session = session;
    },
    function (error) {
      $scope.error = error;
    }
  );
}]);
