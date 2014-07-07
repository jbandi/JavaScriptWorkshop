
// Declaration
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

// Usage
var pers = new Person("John", "Doe");
console.log(pers.fullName());
console.log(pers.fullNameReversed());


// Understanding prototypes
console.log("Object has property 'first': " + pers.hasOwnProperty("first"));
console.log("Object has property 'last': " + pers.hasOwnProperty("last"));
console.log("Object has property 'fullName': " + pers.hasOwnProperty("fullName"));
console.log("Constructor prototype has property 'fullName': " + Person.prototype.hasOwnProperty("fullName"));
console.log("Object prototype has property 'fullName': " + pers.__proto__.hasOwnProperty("fullName"));
console.log("Object prototype is same as constructor prototype: " + (pers.__proto__ === Person.prototype));

// Changing properties of the constructor function prototype changes the behavior of instances:
Person.prototype.fullName = function() {
    return "got you!";
};
console.log(pers.fullName());


// Changing the constructor function prototype does not change the behavior of instances:
Person.prototype = {fullName: function() {
    return "Again: " + this.first + ' ' + this.last;
}};
console.log(pers.fullName());

// ... but of new instances:
var pers2 = new Person("Jane", "Jolly");
console.log(pers2.fullName());