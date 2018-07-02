app.controller('HomeController',
    ['$scope',
     'suggestions',

     function($scope, suggestions) {
        $scope.helloWorld = "Hello, AngularJS!";
        $scope.posts = suggestions.posts;
        $scope.addSuggestion = function() {
            //if the input data is empty,  exit this function
            if (!$scope.title || $scope.title === "") {
                return;
            }
            // add input suggestion to suggestions array
            $scope.posts.push({
                title: $scope.title,
                upvotes: 0,
                comments: [],
            });
            // after adding suggestion, Clear the input
            $scope.title = '';
        };
        $scope.upVote = function(post) {
            post.upvotes += 1;
        };
     }])