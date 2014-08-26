(function () {

    var app = angular.module('myApp', []);

    app.controller('Controller', ['$scope', function($scope) {
        $scope.format = 'M/d/yy h:mm:ss a';
    }])

    app.directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {

        return function (scope, element, attrs) {
            var format,
                timeoutId;

            function updateTime() {
                element.text(dateFilter(new Date(), format));
            }

            scope.$watch(attrs.myCurrentTime, function(value) {
                format = value;
                updateTime();
            });

            // clean up when the element is destroyed (i.e. when the view is gone)
            // This is never happenig in this example, but it is still a best practice
            element.on('$destroy', function() {
                $interval.cancel(timeoutId);
            });

            // start the UI update process; save the timeoutId for canceling
            timeoutId = $interval(function() {
                updateTime(); // update DOM
            }, 1000);
        };

    }]);

})();


