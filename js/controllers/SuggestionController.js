app.controller('SuggestionController',
    ['$scope',
     'suggestions',
     '$routeParams',
     function($scope, suggestions, $routeParams) {
    $scope.post = suggestions.posts[$routeParams.id];
    $scope.addComment = function() {
        // If input is empty, quit function
        if(!$scope.comment || $scope.comment === '') {
            return;
        }
        //push data into array of comments, 0 upvotes
        $scope.post.comments.push({
            body: $scope.comment,
            upvotes: 0,
        });

        //Clear the field after submit
        $scope.comment = '';
    };
    $scope.upVote = function(comment) {
        post.comment.upvotes += 1;
    };
  }])