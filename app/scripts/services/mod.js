'use strict';

/**
 * @ngdoc service
 * @name RedditClone.mod
 * @description
 * # mod
 * Factory in the RedditClone.
 */
angular.module('RedditClone')
  .factory('mod', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
