(function(global) {

//    var subnamespace = MYAPP.namespace('subnamespace');
    global.MYAPP = global.MYAPP || {};
    MYAPP.subnamespace = MYAPP.subnamespace || {};
    var subnamespace = MYAPP.subnamespace;

    var Module1 = function(){
    }

    Module1.prototype.doSomething = function(){
        var module2 = new subnamespace.Module2();
        var module3 = new subnamespace.subsubnamespace.Module3();
        module2.doSomething();
        module3.doSomething();
        console.log("Module 1 did something.")
    }

    // Export the module
    subnamespace.Module1 = Module1;

})(window)
