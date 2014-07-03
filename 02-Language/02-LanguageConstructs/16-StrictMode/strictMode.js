var assert = require('assert');


(function(){
    function fun() { return this; }
    assert.equal(fun(), global);
})();

(function(){
    "use strict"
    function fun() { return this; }
    assert.equal(fun(), undefined);
})();



(function(){
    leaking1 = 42;
})();
assert(global.hasOwnProperty('leaking1'));

(function(){
    assert.throws(function(){
        "use strict"
        leaking2 = 42;
    })
})();
