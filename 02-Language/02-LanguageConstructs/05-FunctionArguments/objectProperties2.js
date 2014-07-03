
var jsdom = require('jsdom');

jsdom.env(
    "<html><body></body></html>",
    function (err, window) {

        $ = require("jquery")(window);

        var myModule = (function(){

            function complexFunction(params) {
                console.log("complex function. From: " + params.from + " From Start: " + params.from_start + " To: " + params.to + " To Start: " + params.to_start);
                // complex code goes here
            }

            return {
                simpleFunction : function(args) {

                    var defaults = {from: [], to: [], from_start:0, to_start:0};
                    var params = $.extend({}, defaults, args); // use jQuery.extend()
                    complexFunction(params);
                }
            }

        })();

        myModule.simpleFunction({from: ['a', 'b', 'c'], to: ['x', 'y']});
        myModule.simpleFunction({from: ['a', 'b', 'c'], to: ['x', 'y'], from_start: 2});
    });