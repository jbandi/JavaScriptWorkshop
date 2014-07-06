
var myApp = angular.module('myApp',[]);

myApp.controller('MyCtrl', ['$scope', function($scope) {

    $scope.persons = [
        {
            firstName: "Katniss",
            lastName: "Everdeen",
            district: 12
        },
        {
            firstName: "Peeta",
            lastName: "Mellark",
            district: 12
        },
        {
            firstName: "Johanna",
            lastName: "Mason",
            district: 7
        },
        {
            firstName: "Finnick",
            lastName: "Odair",
            district: 4
        }
    ];

}]);

