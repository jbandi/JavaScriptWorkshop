var myApp = angular.module('myApp',[]);

myApp.controller('FirstCtrl', ['FirstService', '$scope', function(MyService, $scope) {
    $scope.property = MyService.theNumber;
}]);

myApp.factory('FirstService', function() {

    return {
        theNumber: 42,
        toUpercase: function(input){ return input.toUpercase()}
    }
});
