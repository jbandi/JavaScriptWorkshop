
var name = 'Bob';
function sayHello() {
    leakingVar = 'test';
    console.log(name);
}
sayHello();
if (global.hasOwnProperty('leakingVar')) console.log("LEAKING!");