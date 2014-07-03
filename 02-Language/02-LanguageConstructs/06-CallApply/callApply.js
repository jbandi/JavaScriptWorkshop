
var animals = [
    {species: 'Lion', name: 'King'},
    {species: 'Whale', name: 'Fail'}
];

var print = function(zoo, number){
    console.log(zoo + '#' + number  + ' ' + this.species + ': ' + this.name);
}

for (var i = 0; i < animals.length; i++) {
    print.call(animals[i], 'Zoo1', i);
}

for (var i = 0; i < animals.length; i++) {
    print.apply(animals[i], ['Zoo2', i]);
}
