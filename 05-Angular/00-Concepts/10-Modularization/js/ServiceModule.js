(function() {
    var serviceModule = angular.module('ServiceModule', []);

    serviceModule.provider('MyService', function () {

        var myNumber = 42;

        this.setTheNumber = function (n) {
            myNumber = n;
        };


        this.$get = function () {
            console.log("Executed creation of MyService");

            return {
                theNumber: myNumber
            }
        }
        console.log("Executed creation of MyService Provider")
    });

    console.log("Loaded script for ServiceModule");

})();


