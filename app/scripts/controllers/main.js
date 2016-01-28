'use strict';
/**
 * @ngdoc function
 * @name RedditClone.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the RedditClone
 */
angular.module('RedditClone')
  .controller('MainCtrl', function($scope, $firebase, Posts) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
      /* scope for posting things*/
      $scope.posts = Posts;
      /* save post function */
      $scope.savePost = function(post) {
        if (post.name && post.description && post.url && $scope.authData) {
          //Actually adding the posts to the Firebase
          Posts.$add({
            //Setting the post name
            name: post.name,
            //Setting the post description
            description: post.description,
            //Setting the post URL
            url: post.url,
            //Setting the post votes
            votes: 0,
            //Getting the current user
            user: $scope.authData.twitter.username
          });
        }
      });