app_controllers.controller('SessionsCtrl', ['$scope', '$rootScope', 'DrupalNodesService', 'drupal_instance',function ($scope, $rootScope, DrupalNodesService, drupal_instance) {

  var endpoint = drupal_instance.baseUrl;
  var sessionsResource = drupal_instance.resources.sessions;

  var requestObject = {
    method        : 'GET',
    url           : endpoint + sessionsResource,
    dataType      : 'json',
    crossDomain   : true
  };

  // Get All Sessions
  DrupalNodesService.all(requestObject).then(
    function (response) {
      $scope.sessions = response;
      $scope.toggleStar=function(session){
         session.star=!session.star;
      };
      $scope.doRefresh= function(){
        $scope.$broadcast('scroll.refreshComplete');
      };
    },
    function (error) {
      $scope.error = error;
    }
  ); 
}]);
