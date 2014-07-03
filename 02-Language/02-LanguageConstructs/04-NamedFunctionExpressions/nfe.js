
var myFunction = function f(count){
    // myFunction is visible here
    console.log("Hello: " + count);
    if (count > 0) myFunction(count - 1);
    // f is visible here
    // if (count > 0) f(count - 1);

}
// myFunction is visible here
myFunction(3);
// f is undefined here
//f(3);