app_controllers.controller('SessionsCtrl', ['$scope', '$rootScope', 'SessionsService', '$stateParams', 'dddConference', function ($scope, $rootScope, SessionsService, $stateParams, dddConference) {
  // Current date
  var date = $stateParams.date;
  $scope.date = new Date(date);
  $scope.conferenceDays = dddConference.days

  $scope.toggleStar = function (session) {
     session.star = !session.star;
  };

  $scope.doRefresh = function () {
    $scope.$broadcast('scroll.refreshComplete');
  };

  // Get All Sessions
  SessionsService.getAllSessionsByDay(date).then(
    function (response) {
      $scope.sessions = response.map(function (session) {
        session.speakers = JSON.parse(session.speakers);

        return session;
      });
    },
    function (error) {
      $scope.error = error;
    }
  );
}]);
