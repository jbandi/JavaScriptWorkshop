var assert = require('assert');

function Person(){};

function Employee(){};
Employee.prototype = new Person();

var person = new Person();
var employee = new Employee();

// The constructor functions defines the outcome of instanceof
assert.equal(true, person instanceof Person);
assert.equal(false, person instanceof Employee);

assert.equal(true, employee instanceof Person);
assert.equal(true, employee instanceof Employee);


// Changing the prototype chain of an object influences instanceof
assert.equal(employee.__proto__, Employee.prototype);
employee.__proto__ = Person.prototype;
assert.equal(true, employee instanceof Person);
assert.equal(false, employee instanceof Employee);

function Manager(){};

person.__proto__ = Manager.prototype;
assert.equal(false, person instanceof Person);
assert.equal(true, person instanceof Manager);

Manager.prototype = new Person();
person.__proto__ = Manager.prototype;
assert.equal(true, person instanceof Person);
assert.equal(false, person instanceof Employee);
assert.equal(true, person instanceof Manager);

Manager.prototype = new Person();
person.__proto__ = Manager.prototype;
person.__proto__.__proto__ = Employee.prototype;
assert.equal(true, person instanceof Person);
assert.equal(true, person instanceof Employee);
assert.equal(true, person instanceof Manager);

employee.__proto__ = {};
assert.equal(false, employee instanceof Person);
assert.equal(false, employee instanceof Employee);

var obj = {};
obj.__proto__ = new Person();
assert.equal(true, obj instanceof Person);