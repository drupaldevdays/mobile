app_controllers.controller('UsefullinksCtrl', ['$scope', '$rootScope', '$stateParams', 'DrupalNodesService', 'drupal_instance',  function ($scope, $rootScope, $stateParams, DrupalNodesService, drupal_instance) {
 /* var endpoint = drupal_instance.baseUrl;

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
      $scope.newsdet = response;
    },
    function (error) {
      $scope.error = error;
    }
  );*/

 
    $scope.images = [];
 
    $scope.loadImages = function() {
        for(var i = 0; i < 24; i++) {
            $scope.images.push({id: i, src: "http://placehold.it/50x50"});
        }
    };
 

}]);