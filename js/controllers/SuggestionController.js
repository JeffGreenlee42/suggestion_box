app.controller('SuggestionController',
    ['$scope',
    '$routeParams',
    'suggestions',
     function($scope, $routeParams, suggestions) {
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

        $scope.upVote = function() {
            $scope.post.upvotes += 1;
        };
    };
  }])