app.controller('SuggestionController',
    ['$scope',
     'suggestions',
     '$routeParams',
     function($scope, suggestions, $routeParams) {
    $scope.post = suggestions.posts[$routeParams.id];
    console.log($scope.post);
    $scope.addComment = function(enteredComment) {
        //push data into array of comments, 0 upvotes
        $scope.post.comment.push({
            body: enteredComment,
            upvotes: 0
        });
    };
    $scope.upVote = function(comment) {
        post.comment.upvotes += 1;
    };
  }])