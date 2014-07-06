var myApp = angular.module('myApp',[]);

myApp.controller('FirstCtrl', ['MyService', '$scope', function(MyService, $scope) {
    $scope.property = MyService.theNumber;
}]);

myApp.provider('MyService', function() {

    var myNumber = 42;

    this.setTheNumber = function(n){
        myNumber = n;
    };

    this.$get = function(){
        return {
            theNumber: myNumber
        }
    }
});

myApp.config(['MyServiceProvider', function(myServiceProvider){
    myServiceProvider.setTheNumber(43);
}]);