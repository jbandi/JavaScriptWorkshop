var assert = require('assert');

var myFunction = function() {
    // borrow function from Array prototype
    var args = Array.prototype.slice.call(arguments,1,2);

    return args[0];
};

assert.equal(myFunction(1,2,3), 2);