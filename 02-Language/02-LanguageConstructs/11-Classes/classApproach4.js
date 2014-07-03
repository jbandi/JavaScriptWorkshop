function personFullName() {
    return this.first + ' ' + this.last;
}
function personFullNameReversed() {
    return this.last + ', ' + this.first;
}

function Person(first, last) {
        this.first = first;
        this.last = last;
        this.fullName = personFullName;
        this.fullNameReversed = personFullNameReversed;
}

var pers = new Person("John", "Doe");

console.log(pers.fullName());
console.log(pers.fullNameReversed());

// Now the function object are only created once
var pers2 = new Person("Jane", "Jackson");
console.log("Comparing method instances. Equal: " + (pers.fullName === pers2.fullName));

// Problem: The functions are public again ...
// Solution: use the prototype of the constructor function