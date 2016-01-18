app_services.factory('DrupalNodesService', ['$http', '$q', '$filter', 'drupal_instance', function($http, $q, $filter, drupal_instance) {

  return {

    /*
     * Return All Categories.
     */
    all: function (requestObject) {
      var deferred = $q.defer();
      $http(requestObject).
      success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function (reason) {
        console.log(reason);
        deferred.reject(reason);
      });
      return deferred.promise;
    },

    get: function(nid) {
      var deferred = $q.defer();
      $http(requestObject).
      success(function(data, status, headers, config){
        deferred.resolve(data);
      }).
      error(function(reason){
        deferred.reject(reason);
      });
      return deferred.promise;
    },

  };

}]);