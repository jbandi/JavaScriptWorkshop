
var assert = require('assert');

// Primitive types are stored by value
var number1, number2;

number1 = 3.14159;
number2 = number1;
assert(number1 == number2);

number2 = 42;
assert(number1 != number2);


// Object types are stored by reference
var object1, object2;

object1 = {a: 3.14159};
object2 = object1;
assert(object1.a == object2.a);

object2.a = 42;
assert(object1.a == object2.a);