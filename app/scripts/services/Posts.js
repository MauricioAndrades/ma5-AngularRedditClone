'use strict';
/**
 * return global $firebase scope
 */

 angular.module('RedditClone').factory('Posts', function($firebase, FBURL) {

   return $firebase(new firebase(FBURL)).$asArray();

 });