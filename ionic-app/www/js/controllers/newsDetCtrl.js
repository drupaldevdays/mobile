app_controllers.controller('NewsDetCtrl', ['$scope', '$rootScope', '$stateParams', 'DrupalNodesService', 'drupal_instance',  function ($scope, $rootScope, $stateParams, DrupalNodesService, drupal_instance) {
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
      $scope.newsdet = response;
    },
    function (error) {
      $scope.error = error;
    }
  );
  
    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("I would like to share this news with you!", "This is your subject", "www/img/ionic.png", "http://milan2016.drupaldays.org/news")
            .then(function(result) {
              console.log('sucess');
            }, function(err) {
              console.log('An error occured');
            });
    }

    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.shareViaTwitter(message, image, link)
            .then(function(result) {
              console.log('sucess');
            }, function(err) {
              console.log('An error occured');
            });
    }

    $scope.shareViaFacebook = function(message, image, link) {
        $cordovaSocialSharing.shareViaFacebook(message, image, link)
            .then(function (result) {
                console.log('sucess');
            }, function(err) {
                console.log('An error occured');
            });
    }

    $scope.shareViaWhatsApp = function(message, image, link) {
        $cordovaSocialSharing.shareViaWhatsApp(message, image, link)
            .then(function (result) {
                console.log('sucess');
            }, function(err) {
                console.log('An error occured');
            });
    };
}]);
