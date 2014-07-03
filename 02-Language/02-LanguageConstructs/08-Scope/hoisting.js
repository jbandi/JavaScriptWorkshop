
function add1(n1, n2) {
    var sum = n1 + n2;
    if (true) {
        var sum = 42;
    }
    return sum;
};

console.log(add1(2,3));


function add2(n1, n2) {
    sum = n1 + n2;
    if (true) {
        sum = 42;
    }
    var sum;
    return sum;
};

console.log(add2(2,3));