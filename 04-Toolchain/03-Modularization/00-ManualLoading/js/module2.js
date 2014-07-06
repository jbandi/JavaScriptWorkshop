(function(global) {

//    var subnamespace = MYAPP.namespace('subnamespace');
    global.MYAPP = global.MYAPP || {};
    MYAPP.subnamespace = MYAPP.subnamespace || {};
    var subnamespace = MYAPP.subnamespace;

//    var module3 = new subnamespace.subsubnamespace.Module3();
//    var myInt = module3.getValue();

    var Module2 = function(){
    }

    Module2.prototype.doSomething = function(){
        console.log("Module 2 did something.")
    }

    // Export the module
    subnamespace.Module2 = Module2;

})(window)
