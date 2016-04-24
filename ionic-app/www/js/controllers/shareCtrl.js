
app_controllers.controller('ShareCtrl', ['$scope', '$rootScope', 'DrupalNodesService', 'drupal_instance','$cordovaSocialSharing', function ($scope, $rootScope, DrupalNodesService, drupal_instance,$cordovaSocialSharing) {
/* var endpoint = drupal_instance.baseUrl;
  var infoResource = drupal_instance.resources.info;

  var requestObject = {
    method        : 'GET',
    url           : endpoint + infoResource,
    dataType      : 'json',
    crossDomain   : true
  };

  // Get All Sessions
  DrupalNodesService.all(requestObject).then(
    function (response) {
      $scope.info = response;
    },
    function (error) {
      $scope.error = error;
    }
  );*/

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
    }
}]);
