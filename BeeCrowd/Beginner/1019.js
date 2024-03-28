var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let segundosRecebidos = parseInt(lines.shift());
let minutosPrimeiro = Math.trunc(segundosRecebidos / 60);
let minutos = minutosPrimeiro % 60;
let horas = Math.trunc(segundosRecebidos / 3600);
let segundos = segundosRecebidos % 60;

console.log(`${horas}:${minutos}:${segundos}`);