'use strict';

/**
 * @ngdoc service
 * @name RedditClone.myFactory
 * @description
 * # myFactory
 * Factory in the RedditClone.
 */
angular.module('RedditClone')
  .factory('myFactory', function () {
    // Service logic
    // ...

    var modFBURL = 'https://blinding-torch-7192.firebaseio.com/';

    // Public API here
    return {
      url: function () {
        return modFBURL;
      }
    };
  });
