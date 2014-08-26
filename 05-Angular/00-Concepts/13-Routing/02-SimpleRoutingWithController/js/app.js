var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/1', {
                templateUrl: 'partials/page1.html',
                controller: 'Page1Controller'
            }).
            when('/2', {
                templateUrl: 'partials/page2.html',
                controller: 'Page2Controller'
            }).
            otherwise({
                redirectTo: '/1'
            });
    }]);

myApp.controller('Page1Controller', function($scope){
        console.log("Page1Controller");
        $scope.property = "41";
    }
)

myApp.controller('Page2Controller', function($scope){
        console.log("Page2Controller");
        $scope.property = "42";
    }
)