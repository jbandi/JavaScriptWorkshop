(function () {

    var app = angular.module('myApp', []);

    app.filter('reverse', function () {
        return function (input, uppercase) {
            input = input || '';
            var out = "";
            for (var i = 0; i < input.length; i++) {
                out = input.charAt(i) + out;
            }
            // conditional based on optional argument
            if (uppercase) {
                out = out.toUpperCase();
            }
            return out;
        };
    });

    app.filter('startsWith', function () {
        return function (items, startLetter) {
            var filtered = [];
            var letterMatch = new RegExp(startLetter, 'i');
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (letterMatch.test(item.name.substring(0, 1))) {
                    filtered.push(item);
                }
            }
            return filtered;
        }
    });


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

        // Alternative: Use this method as filter: ng-repeat="person in persons | filter:startsWith(letter)"
        $scope.startsWithK = function (startLetter) {
            return function(item) {
                var letterMatch = new RegExp(startLetter, 'i');
                return letterMatch.test(item.name.substring(0, 1));
            }
        };
    }]);

})();


