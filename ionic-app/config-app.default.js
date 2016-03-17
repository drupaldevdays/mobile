var app_config = angular.module('drupal8-ionic.configuration', []);

/**
 * REPLACE HERE YOUR DRUPAL INSTANCE
 **/

app_config.constant('drupal_instance', {
  baseUrl: 'http://path/to/ddd_website', // NO trailing slash!
  // Rest List Resources, as defined in Drupal views (/admin/structure/views)
  resources: {
    news: '/news.json',
    sessions: '/rest/sessions/json'
  }
});
