
var assert = require('assert');

var myObj = {
    a: "foo",
    b: "bar"
};
myObj.c = "baz";

assert(myObj.x == undefined);

myObj.b = undefined;
assert(myObj.b == undefined);

delete myObj.a;
assert(myObj.a == undefined);