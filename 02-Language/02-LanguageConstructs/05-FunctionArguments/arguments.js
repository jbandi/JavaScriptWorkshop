function sayHello(name, date) {

    if (arguments.length < 1) {
        throw new Error("function f called with " + arguments.length +
            "arguments, but it expects at least 1 arguments.");
    }

    date = date || new Date();
    var message = arguments[2] || "";

    console.log("Hello " + name + " on " + date + "! " + message);
}

sayHello("Bob");
sayHello("John", new Date(1995,11,17));
sayHello("Jane", new Date(1985,11,17), "Have a nice day!");
//sayHello();
