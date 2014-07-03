
var person = {
    age: 42,
    address: {
        street: "Zürcherstrasse 42",
        city: "Winterthur"
    }
};
person.firstName = "Hans";
person["lastName"] = "Meier";

var fullName = person["firstName"] + " " + person.lastName;
console.log("Full Name: " + fullName);

delete person.firstName;

for(var prop in person){
    if (person.hasOwnProperty(prop)) {
        console.log(prop + ': ' + person[prop]);
    }
}