
var myApp = angular.module('myApp',[]);

myApp.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {

    $http.get('http://courserater-jbandi.rhcloud.com/courserater/rest/ratings-cors')
        .success(function(data, status, headers, config){
            $scope.status = status;
            $scope.data = data;
        })
        .error(function(data, status, headers, config){
            // Note that status is only set if the server responded with a status.
            // In the case of CORS problems, the browser is raising the error and no status set here!
            alert("Could not get data from server!")
        });

    console.log("Getting data ...");
}]);


