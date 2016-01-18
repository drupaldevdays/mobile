app_controllers.controller('SessionsCtrl', ['$scope', '$rootScope', 'DrupalNodesService', 'drupal_instance', function ($scope, $rootScope, DrupalNodesService, drupal_instance) {

  var endpoint = drupal_instance.baseUrl;

  var requestObject = {
    method: 'GET',
    url: endpoint + '/rest/sessions/json',
    dataType      : 'json',
    crossDomain   : true
  };

  // Get All Sessions
  DrupalNodesService.all(requestObject).then(
    function(response) {
      $scope.sessions = response;
    },
    function(error) {
      $scope.error = error;
    }
  );

}]);