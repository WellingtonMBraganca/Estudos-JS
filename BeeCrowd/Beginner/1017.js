var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x, y, distance, liters;
const kmPorL = 12;
x = parseInt(lines.shift());
y = parseInt(lines.shift());

distance = x * y;
liters = distance / kmPorL;

console.log(liters.toFixed(3));