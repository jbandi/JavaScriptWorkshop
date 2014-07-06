(function() {
    var subsubnamespace = MYAPP.namespace('subnamespace.subsubnamespace');

    var Module3 = function(){
    }

    Module3.prototype = {
        doSomething: function(){
            console.log("Module 3 did something.")
        },
        getValue: function(){
            return 42;
        }
    };

    // Export the module
    subsubnamespace.Module3 = Module3;

})()