define(function(require){
    var button = document.getElementById("btnGreet");
    button.addEventListener("click", function(){
        var greeter = require(["greeter"], function(greeter){
            greeter.greet("World!");
        });
    })
})
