var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let dadosEmLinhas1 = lines.shift().split(' ');
let dadosEmLinhas2 = lines.shift().split(' ');

let x1, y1, x2, y2, distanceBetween;
x1 = parseFloat(dadosEmLinhas1[0]);
y1 = parseFloat(dadosEmLinhas1[1]);
x2 = parseFloat(dadosEmLinhas2[0]);
y2 = parseFloat(dadosEmLinhas2[1]);

distanceBetween = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distanceBetween.toFixed(4));