app_services.factory('SessionsService', ['DrupalNodesService', 'drupal_instance', function(DrupalNodesService, Drupal) {
  return {
    /**
     * Return all sessions by day.
     */
    getAllSessionsByDay: function (day) {
      var urlSessionsByDay = Drupal.resources.sessionsByDay.replace('{day}', day);

      return DrupalNodesService.all({
        method        : 'GET',
        url           : Drupal.baseUrl + urlSessionsByDay,
        dataType      : 'json',
        crossDomain   : true
      });
    }
  };
}]);
