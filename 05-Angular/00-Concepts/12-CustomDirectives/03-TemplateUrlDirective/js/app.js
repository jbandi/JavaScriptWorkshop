(function () {

    var app = angular.module('myApp', []);

    app.controller('Controller', ['$scope', function ($scope) {
        $scope.rating = {name:'Jonas', grade:4};
    }]);

    app.directive('myRating', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/my-rating.html'
        }
    });

})();


