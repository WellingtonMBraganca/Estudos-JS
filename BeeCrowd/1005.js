var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A, B, media;
A = parseFloat(lines.shift());
B = parseFloat(lines.shift());

media = ((A * 3.5) + (B * 7.5)) / 11;

console.log('MEDIA = ' + media.toPrecision(6));

