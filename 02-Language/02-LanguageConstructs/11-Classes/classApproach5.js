var assert = require('assert');

function Person(first, last) {
        this.first = first;
        this.last = last;
}

Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
};

var pers = new Person("John", "Doe");

console.log(pers.fullName());
console.log(pers.fullNameReversed());

// Now the function object are only created once
var pers2 = new Person("Jane", "Jolly");
assert.strictEqual(pers.fullName, pers2.fullName); // same function instances
