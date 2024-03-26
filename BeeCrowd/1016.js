var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let distanceBetween = parseInt(lines.shift());

let minutos = 1;
let x = (60 * distanceBetween)
let y = (minutos * 30);
let minutosTotais = x / y;

console.log(`${minutosTotais} minutos`);