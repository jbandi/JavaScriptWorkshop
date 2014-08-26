
(function() {
    var myApp = angular.module('myApp');
    myApp.controller('FirstCtrl', ['MyService', '$scope', function(myService, $scope) {
        $scope.property = myService.theNumber;
        console.log("Executed FirstController creation");
    }]);

    myApp.provider('FirstService', ['MyServiceProvider', function(myServiceProvider){
        // MyServiceProvider is available since we declared a dependency myApp->ServiceModule
        // However we can't inject MyService into this provider creation, since we are in the configuration phase
        this.$get = ['MyService', function(myService){
            console.log("Executed creation of FirstService")
        }];
        console.log("Executed creation of FirstService Provider")
    }]);


    console.log("Loaded script for FirstController");

})();
