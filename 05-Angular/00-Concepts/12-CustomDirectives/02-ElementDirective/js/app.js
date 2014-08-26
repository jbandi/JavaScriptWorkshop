(function () {

    var app = angular.module('myApp', []);

    app.controller('Controller', ['$scope', function ($scope) {
        $scope.rating = {name:'Jonas', grade:4};
    }]);

    app.directive('myRating', function(){
        return {
            restrict: 'E',
            template: 'Name: {{rating.name}}, Rating: {{rating.grade}}'
        }
    })

})();


