function makePerson(first, last) {
    return {
        first: first,
        last: last
    };
}
function personFullName(person) {
    return person.first + ' ' + person.last;
}
function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
}
var pers = makePerson("John", "Doe");

console.log(personFullName(pers));
console.log(personFullNameReversed(pers));

// Problem: not OO, procedures operating on structs