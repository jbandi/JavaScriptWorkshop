
var myApp = angular.module('myApp',[]);

myApp.controller('MyCtrl', ['$scope', '$http', '$interval', function($scope, $http, $interval) {

    var fetchData = function () {
        $http.get('http://courserater-jbandi.rhcloud.com/courserater/rest/ratings-cors')
            .success(function (data, status, headers, config) {
                $scope.status = status;
                $scope.data = data;
            });

        console.log("Getting data ...");
    };

    var decrementCountdown = function(){
        $scope.countdown -= 1;
        console.log("Counter is " + $scope.countdown);

        if ($scope.countdown < 1) {
            fetchData();
        }
    };

    var startCountdown = function(){
        $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.countdown = 5;
    $scope.getData = fetchData;
    startCountdown();
}]);


