(function () {

    var app = angular.module('myApp', []);

    app.controller('Controller', ['$scope', function ($scope) {
        $scope.firstRating = {name:'Jonas', grade:4};
        $scope.secondRating = {name:'Bandi', grade:3};
        $scope.testValue = 'Test';
    }]);

    app.directive('myRating', function(){
        return {
            restrict: 'E',
            templateUrl: 'templates/my-rating.html',
            scope: {rating: '='}
        }
    });

})();


