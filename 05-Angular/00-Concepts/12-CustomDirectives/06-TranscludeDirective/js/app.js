(function () {

    var app = angular.module('myApp', []);

    app.controller('Controller', ['$scope', function($scope) {
        $scope.message = 'This is the relevant content';
    }]);

    app.directive('myCustomBox', function() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'templates/my-custom-box.html'
        };
    });

})();


