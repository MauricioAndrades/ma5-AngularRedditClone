'use strict';

/**
 * @ngdoc function
 * @name RedditClone.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the RedditClone
 */
angular.module('RedditClone')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
