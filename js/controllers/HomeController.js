app.controller('HomeController',
    ['$scope',
     'suggestions',

     function($scope, suggestions) {
        $scope.helloWorld = "Hello, AngularJS!";
        $scope.posts = suggestions.posts;
    }]);