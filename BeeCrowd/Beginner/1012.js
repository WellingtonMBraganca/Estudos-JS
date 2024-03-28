var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A, B, C, recebidos;
recebidos = lines.shift().split(' ');
A = parseFloat(recebidos[0]);
B = parseFloat(recebidos[1]);
C = parseFloat(recebidos[2]);

const pi = 3.14159;
let areaTriangulo = (A * C) / 2;
let areaCirculo = pi * C ** 2;
let areaTrapezio = ((A + B) * C) / 2;
let areaQuadrado = B ** 2;
let areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}
CIRCULO: ${areaCirculo.toFixed(3)}
TRAPEZIO: ${areaTrapezio.toFixed(3)}
TRAPEZIO: ${areaQuadrado.toFixed(3)}
TRAPEZIO: ${areaRetangulo.toFixed(3)}
`);