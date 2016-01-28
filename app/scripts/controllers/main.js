'use strict';

	angular.module('RedditClone')
	  .controller('MainCtrl', function ($scope, $firebase, Posts) {
	    $scope.awesomeThings = [
	      'HTML5 Boilerplate',
	      'AngularJS',
	      'Karma'
	    ];


	/* scope for posting things*/
	$scope.post = Posts;


	/* save post function */
	$scope.savePost = function() {

    if (post.name && post.title && post.url) {
			/* add post to firebase */
			Post.$add({
		  	name: post.name,
				body: post.body,
				url: post.url,
				votes: 0,
				// user: $scope.authData.github.username
			});
			/* reset values for next post */
			post.name = "";
			post.body = "";
			post.url = "";
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
	}


	/*user can delete an entry*/
	$scope.deletePost = function(post) {
		/*get the post*/
		var dPost = new Firebase('FBURL' + post.$id);
		/*delete it from firebase*/
		dPost.remove();
	}



	/*add comment*/
	$scope.addComment = function(post, comment) {
		// important: finalize authdata
		if ($scope.authData) {
			var ref = new Firebase(FBURL + post.$id + '/comments');
			var sync = $firebase(ref);
			$scope.comments = sync.$asArray();
			$scope.commends.$add({
				user: $scope.authData.github.username,
				text: comment.text
			});
		} else {
			alert('plese log in');
		}

		/*reset the comment text before exiting function*/
		comment.text = "";
	}


	$scope.deleteComment = function(post, comment) {
		/*get the comment to delete*/
		var curCom = new firebase(FBURL + post.$id + '/comments' + comment.$id);
		/*remove comment*/
		curCom.remove();
	}

	// important finish auth login
});