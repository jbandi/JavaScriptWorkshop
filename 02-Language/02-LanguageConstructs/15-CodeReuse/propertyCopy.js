var assert = require('assert');

var extend = function(child, parent) {
    var prop;
    child = child || {};
    for (prop in parent) {
        if (parent.hasOwnProperty(prop)) {
            child[prop] = parent[prop];
        }
    }
    return child;
};

var a = {
    a1: 'foo',
    a2: 'bar'
};

var b = {
    b1: 'baz',
    b2: function(){console.log("Hello World")}
};
extend(a, b);

assert(a.hasOwnProperty('b1'));
assert(a.hasOwnProperty('b2'));


// doing the same with lodash:
var _ = require('lodash');
c = _.extend({}, a, b);
assert(c.hasOwnProperty('a1'));
assert(c.hasOwnProperty('a2'));
assert(c.hasOwnProperty('b1'));
assert(c.hasOwnProperty('b2'));