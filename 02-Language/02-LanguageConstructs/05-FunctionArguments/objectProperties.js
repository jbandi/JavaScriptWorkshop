

var myModule = (function(){
    function complexFunction(/* array */ from, /* index */ from_start,
                       /* array */ to,   /* index */ to_start) {
        console.log("complex function. From: " + from + " From Start: " + from_start + " To: " + to + " To Start: " + to_start);
        // complex code goes here
    }

    return {
        simpleFunction : function(args) {
            complexFunction(args.from,
            args.from_start || 0,
            args.to,
            args.to_start || 0);
        }
    }

})();

myModule.simpleFunction({from: ['a', 'b', 'c'], to: ['x', 'y']});
myModule.simpleFunction({from: ['a', 'b', 'c'], to: ['x', 'y'], from_start: 2});