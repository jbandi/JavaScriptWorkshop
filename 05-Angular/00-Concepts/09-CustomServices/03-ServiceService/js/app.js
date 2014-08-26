var myApp = angular.module('myApp',[]);

var Calculator = function(){
    // This is a constructor function.
    this.add = function(val1, val2) {

        return val1 + val2;
    };
}

myApp.controller('FirstCtrl', ['Calculator', '$scope', function(calculator, $scope) {

    var v1 = 41;
    var v2 = 2;

    $scope.property = calculator.add(v1, v2);
}]);

myApp.service('Calculator', Calculator);


