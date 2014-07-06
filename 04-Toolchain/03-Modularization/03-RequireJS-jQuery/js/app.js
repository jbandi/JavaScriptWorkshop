define(function(require){

    require(['jquery'], function($){
        $("#btnGreet").on("click", function(){
            var greeter = require(["greeter"], function(greeter){
                greeter.greet("World!");
            });
        });
    })
})
