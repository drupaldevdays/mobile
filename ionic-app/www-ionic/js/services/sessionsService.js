app_services.factory('DrupalSessionsService', ['$http', '$q', '$filter', 'drupal_instance', function($http, $q, $filter, drupal_instance) {

  var endpoint = drupal_instance.baseUrl;

  console.log(endpoint);

  var service = {

    /*
     * Return All Categories.
     */
    all: function () {
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: endpoint + '/rest/sessions/json',
        dataType      : 'json',
        crossDomain   : true
      }).
      success(function (data, status, headers, config) {
        console.log(data);
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
      $http({
        method: 'GET',
        url: endpoint + '/node/' + nid,
        params: {
          '_format': 'json',
        }
      }).
      success(function(data, status, headers, config){
        deferred.resolve(data);
      }).
      error(function(reason){
        deferred.reject(reason);
      });
      return deferred.promise;
    },

  };

  return service;

}]);