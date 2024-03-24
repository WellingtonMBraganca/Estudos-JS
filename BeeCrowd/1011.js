var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//(4/3) * pi * R3. Consider (assign) for pi the value 3.14159

let R = parseFloat(lines.shift());

const pi = 3.14159;
let Sphere = (4.0/3) * pi * (R ** 3);

console.log(`VOLUME = ${Sphere.toFixed(3)}`);

