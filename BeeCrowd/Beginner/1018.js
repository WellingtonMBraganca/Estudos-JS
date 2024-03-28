var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valorRecebido = parseInt(lines.shift());

let nota100 = Math.trunc(valorRecebido / 100);
let sobrou100 = valorRecebido % 100;

let nota50 = Math.trunc(sobrou100 / 50);
let sobrou50 = sobrou100 % 50;

let nota20 = Math.trunc(sobrou50 / 20);
let sobrou20 = sobrou50 % 20;

let nota10 = Math.trunc(sobrou20 / 10);
let sobrou10 = sobrou20 % 10;

let nota5 = Math.trunc(sobrou10 / 5);
let sobrou5 = sobrou10 % 5;

let nota2 = Math.trunc(sobrou5 / 2);
let nota1 = sobrou5 % 2;

console.log('nota 100');
console.log(nota100);
console.log(sobrou100);
console.log('nota 50');
console.log(nota50);
console.log(sobrou50);
console.log('nota 20');
console.log(nota20);
console.log(sobrou20);
console.log('nota 10');
console.log(nota10);
console.log(sobrou10);
console.log('nota 5');
console.log(nota5);
console.log(sobrou5);
console.log('nota 2');
console.log(nota2);
console.log('nota 1');
console.log(nota1);

console.log(valorRecebido);
console.log(nota100, 'nota(s) de R$ 100,00')
console.log(nota50, 'nota(s) de R$ 50,00')
console.log(nota20, 'nota(s) de R$ 20,00')
console.log(nota10, 'nota(s) de R$ 10,00')
console.log(nota5, 'nota(s) de R$ 5,00')
console.log(nota2, 'nota(s) de R$ 1,00')
console.log(nota1, 'nota(s) de R$ 1,00')