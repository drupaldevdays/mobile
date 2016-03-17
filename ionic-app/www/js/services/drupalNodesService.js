app_services.factory('DrupalNodesService', ['$http', '$q', '$filter', function($http, $q, $filter) {

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
        deferred.reject(reason);
      });
      return deferred.promise;
    },

    get: function(requestObject) {
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