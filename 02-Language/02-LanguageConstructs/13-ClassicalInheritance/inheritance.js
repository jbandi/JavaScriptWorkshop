var assert = require('assert');

var Person = function(name) {
    this.name = name;
};
Person.prototype.getName = function() {
    return this.name;
};

var Employee = function(name, employer) {
    // rent-a-constructor
    Person.call(this, name);
    // extend with more properties
    this.employer = employer;
};
Employee.prototype = new Person();


var empl = new Employee("Tyler Durden",
    "TheClub");

// Check properties
assert(empl.hasOwnProperty('name'));
assert(empl.hasOwnProperty('employer'));

// Follow the prototype chain
assert(!empl.hasOwnProperty('getName'));
assert(!empl.__proto__.hasOwnProperty('getName'));
assert(empl.__proto__.__proto__.hasOwnProperty('getName'));