var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/1', {
                templateUrl: 'partials/page1.html'
            }).
            when('/2', {
                templateUrl: 'partials/page2.html'
            }).
            otherwise({
                redirectTo: '/1'
            });
    }]);