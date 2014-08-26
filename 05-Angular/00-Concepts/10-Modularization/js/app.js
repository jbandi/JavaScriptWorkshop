(function() {

    // At execution time of this function, ServiceModule is not yet known.
    // But we declare that ServiceModule must be loaded before myApp
    var myApp = angular.module('myApp', ['ServiceModule']);

    myApp.config(['MyServiceProvider', function (myServiceProvider) {
        // At execution time of this function, MyServiceProvider from the ServiceModule is known
        // We get an exception if we remove the dependency declaration above
        // We can't inject service instances in the config phase
        // The FirstServiceProvider can't be executed, since it is part of the myApp module
        myServiceProvider.setTheNumber(44);
        console.log("MyApp config block completed.");
    }]);

    myApp.run(['MyService', 'FirstService', function(myService, firstService){
        //We cant inject providers in the run block
        console.log("MyApp run block completed.");
    }])

})();


