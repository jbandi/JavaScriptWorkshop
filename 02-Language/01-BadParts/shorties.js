0 == 0
0 == '0'
0 == ''

false == false
false == 'false'
false == '0'

var myArray = [0]; 
myArray == myArray; 
myArray == !myArray

var myArray = [null, undefined, []]; 
myArray == ',,'

NaN === NaN
NaN !== NaN
typeof NaN

Math.min() < Math.max()

var ar = ['i', 'j', 'k'];
for(v in ar){ console.log(v) };


print = function(v){console.log(v); return v;};
['10', '10', '10'].map(print);
['10', '10', '10'].map(parseInt);	