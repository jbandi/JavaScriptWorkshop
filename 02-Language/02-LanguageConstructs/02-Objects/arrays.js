
var a = ["dog", "cat", "hen"];
//a[100] = "fox";

a.push("wolf");
a.unshift("duck");

console.log("Array length: " + a.length);
console.log(a.join(","));



for (var i = 0, len = a.length; i < len; i++) {
    console.log(a[i]);
}

//for (var i = 0, item; item = a[i++];) {
//    console.log(a[i]);
//}

a.sort();
a.reverse();
console.log(a.join(","));

var b = a.splice(2,1);
console.log("Removed:" + b.join(","));
console.log("Remaining: " + a.join(","));

var first = a.shift();
var last = a.pop();
console.log(first + ', ' + last);

