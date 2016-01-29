'use strict';

/**
 * In Angular, a Controller is defined by a JavaScript constructor function that is used to augment the Angular Scope.
 * A controller will be attached to the dom via `ng-controller`
 */

angular.module('RedditClone').controller('MainCtrl', function($scope, $firebase, Posts) {

	$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];

	/* scope for posting things*/
	$scope.posts = Posts;


	/* save post function */
	$scope.savePost = function(post) {

    if (post.name && post.title && post.url) {
			/* add post to firebase */
			Posts.$add({
		  	name: post.name,
				body: post.body,
				url: post.url,
				votes: 0,
				// user: $scope.authData.github.username
			});
			/* reset values for next post */
			post.name = '';
			post.body = '';
			post.url = '';
		} else {
			// alert('please log in');
		}
	};


	/*user can upvote*/
	$scope.upVote = function(post) {
		/*increment counter*/
		post.upvote++;
		/*save it to firebase*/
		Posts.$save(post);
	};


	/*user can delete an entry*/
	$scope.deletePost = function(post) {
		/*get the post*/
		var dPost = new Firebase('FBURL' + post.$id);
		/*delete it from firebase*/
		dPost.remove();
	};



	/*add comment*/
	$scope.addComment = function(post, comment) {
		// important: finalize authdata
		if ($scope.authData) {
			var commentRef = new Firebase(FBURL + post.$id + '/comments');
			var sync = $firebase(commentRef);
			$scope.comments = sync.$asArray();
			$scope.commends.$add({
				user: $scope.authData.github.username,
				text: comment.text
			});
		} else {
			alert('plese log in');
		};

		/*reset the comment text before exiting function*/
		comment.text = '';
	}


	$scope.deleteComment = function(post, comment) {
		/*get the comment to delete*/
		var currentComm = new Firebase(FBURL + post.$id + '/comments' + comment.$id);
		/*remove comment*/
		currentComm.remove();
	};

	// important finish auth login
});