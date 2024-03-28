var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let diasRecebidos = parseInt(lines.shift());
let anos = Math.floor(diasRecebidos / 365);
let sobraAnos = diasRecebidos % 365;
let meses = Math.floor(sobraAnos / 30);
let dias = sobraAnos % 30;

console.log(`${anos} ano(s)
${meses} mes(es)
${dias} dia(s)`
);