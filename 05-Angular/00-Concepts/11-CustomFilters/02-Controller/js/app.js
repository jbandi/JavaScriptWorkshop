(function () {

    var app = angular.module('myApp', []);

    app.controller('Controller', ['$scope', function ($scope) {
        $scope.greeting = 'hello';

        $scope.persons = [
            {
                name: 'Katniss Everdeen'
            },
            {
                name: 'Peeta Mellark'
            },
            {
                name: 'Gale Hawthorne'
            },
            {
                name: 'Haymitch Abernathy'
            },
            {
                name: 'Primrose Everdeen'
            }
        ];

        $scope.startsWith = function (startLetter) {
            return function(item) {
                var letterMatch = new RegExp(startLetter, 'i');
                return letterMatch.test(item.name.substring(0, 1));
            };
        };
    }]);

})();


