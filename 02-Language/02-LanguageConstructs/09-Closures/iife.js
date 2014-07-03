var calcModule = (function(offset){
    // private members
    var a = [1,2,3];
    function calculate(){
        return (a[0]*a[1])+a[2];
    }
    function calcAndAdd(){
        return calculate() + offset;
    }
    function calcAndSubtract(){
        return calculate() - offset;
    }

    // public members
    return {
        add: calcAndAdd,
        subtract: calcAndSubtract
    }
})(2);


console.log(calcModule.add());
console.log(calcModule.subtract());