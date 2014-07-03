var foo = {};
foo.bar = "new property";
foo.baz = 3;

var JSONfoo = JSON.stringify(foo);
console.log(JSONfoo);

var backToJS = JSON.parse(JSONfoo);

// Define the JSON representation with a toJSON function
x = {};
x.foo = "foo";
x.toJSON = function() { return "bar"; };
var json1 = JSON.stringify(x);

console.log(json1);