app_services.factory('DrupalNodesService', ['$http', '$q', function ($http, $q) {
  return {
    /**
     * Return All nodes.
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

    /**
     * Extract a specific node.
     */
    get: function (requestObject) {
      var deferred = $q.defer();

      $http(requestObject).
        success(function (data, status, headers, config) {
          deferred.resolve(data);
        }).
        error(function (reason) {
          deferred.reject(reason);
        });

      return deferred.promise;
    }
  };
}]);
