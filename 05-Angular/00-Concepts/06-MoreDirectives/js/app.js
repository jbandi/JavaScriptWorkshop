
var myApp = angular.module('myApp',[]);

myApp.controller('MyCtrl', ['$scope', function($scope) {

    $scope.products =  [
        {
            name: "Vacuum Cleaner",
            price: 111.95,
            description: "It really sucks!",
            notAvailable: false,
            inStock: true
        },
        {
            name: "Broomstick",
            price: 2,
            description: "As bristly as it gets!",
            notAvailable: false,
            inStock: false
        }
    ];

}]);

