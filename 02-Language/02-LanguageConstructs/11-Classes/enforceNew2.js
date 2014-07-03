function Person(first, last) {

    if (false === (this instanceof Person)) {
        return new Person(first, last); // call constructor recursively
    }

    this.first = first;
    this.last = last;
}

Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
};

//var pers = new Person("John", "Doe");
var pers = Person("John", "Doe");

console.log(pers.fullName());
console.log(pers.fullNameReversed());
//console.log(global.first);
