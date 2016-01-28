'use strict';

angular.module('RedditClone')
.controller('MainCtrl', function($scope, $firebase, Posts) {
  $scope.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma'];

  /* scope for posting things*/
  $scope.posts = Posts;


  /* save post function */
  $scope.savePost = function() {
    if(post.name && post.description && post.url & $scope.authData) {
      /* add post to firebase */
      Post.$add({
        name: post.name,
        description: post.description,
        url: post.url,
        votes: 0,
        user: $scope.authData.github.username
      });

      /* reset values for next post */
      post.name = "";
    }
  }
});
