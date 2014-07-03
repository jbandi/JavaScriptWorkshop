
var add = function(first, second) {
    return first + second;
};

var splitCall = function(first, func){
    return function(second){
        return func(first, second);
    }
}

var addOne = splitCall(1, add);
var result = addOne(22);
console.log(result);