'use strict';
/**
 * returns a new $firebase we can use globally with FBURL.
 */

angular.module('RedditClone').factory('Posts', function($firebase, FBURL) {

  return $firebase(new Firebase(FBURL)).$asArray();

});