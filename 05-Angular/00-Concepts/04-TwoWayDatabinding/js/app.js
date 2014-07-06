var myApp = angular.module('myApp', []);

myApp.controller('MyCtrl', ['$scope', function ($scope) {

    var reset = function () {
        $scope.item = {
            quantity: 1,
            price: 5,
            getAmount: function () {
                return this.quantity * this.price
            }
        };
    };

    $scope.reset = reset;
    reset();
}]);


