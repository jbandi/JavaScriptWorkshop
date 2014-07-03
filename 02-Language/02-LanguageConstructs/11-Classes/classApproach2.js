function makePerson(first, last) {
    return {
        first: first,
        last: last,
        fullName: function() {
            return this.first + ' ' + this.last;
        },
        fullNameReversed: function() {
            return this.last + ', ' + this.first;
        }
    };
}

var pers = makePerson("John", "Doe");

console.log(pers.fullName());
console.log(pers.fullNameReversed());

// Next Step: make a real constructor function and use the "new" keyword