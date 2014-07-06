
var myApp = angular.module('myApp',[]);

myApp.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {

    var backenUrl = 'http://courserater-jbandi.rhcloud.com/courserater/rest/ratings-cors';
//    var backenUrl = 'http://localhost:8080/courserater/rest/ratings-cors';

    var getRatings = function() {
        $http.get(backenUrl)
            .success(function (data, status, headers, config) {
                $scope.status = status;
                $scope.ratings = data;
            })
            .error(function (data, status, headers, config) {
                // Note that status is only set if the server responded with a status.
                // In the case of CORS problems, the browser is raising the error and no status set here!
                alert("Could not get data from server!")
            });
    };

    var postRating = function() {
        $http.post(backenUrl, {"participantName": $scope.participantName, "score": $scope.score, "courseDate": new Date()});
    };

    var putRating = function() {
        $http.put(backenUrl + '/' + $scope.ratingId, {"id":$scope.ratingId , "participantName": $scope.participantName, "score": $scope.score, "courseDate": new Date()})
    }

    var deleteRating = function() {
        $http.delete(backenUrl + '/' + $scope.ratingId);
    }


    $scope.getRatings = getRatings;
    $scope.postRating = postRating;
    $scope.putRating = putRating;
    $scope.deleteRating = deleteRating;
}]);


