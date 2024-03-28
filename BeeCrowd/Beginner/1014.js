var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x, y, spentFuel;
x = parseInt(lines.shift());
y = parseFloat(lines.shift());

spentFuel = (x / y);

console.log(`${spentFuel.toFixed(3)} km/l`);