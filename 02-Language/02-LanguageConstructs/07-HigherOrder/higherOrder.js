
function ArrayForEach(array, func) {
    for (var i = 0; i < array.length; i++) {
        func(array[i]);
    }
};

ArrayForEach([1,2,3,4,5], function(msg){console.log(msg)});

