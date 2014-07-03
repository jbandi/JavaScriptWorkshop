var assert = require('assert');

var parent = {
    get: function fn() {
        return this.val;
    },
    val: 42
};

var child = Object.create(parent);
child.val = 3.14159;

var grandchild = Object.create(child);

assert.equal(parent.get(), 42);
assert.equal(child.get(), 3.14159);
assert.equal(grandchild.get(), 3.14159);
