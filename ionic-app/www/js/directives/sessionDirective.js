app_directives.directive('dddSession', function () {
  return {
    restrict: 'E',
    'scope': {
      'session': '=session'
    },
    templateUrl: 'templates/session-preview.html'
  };
});
