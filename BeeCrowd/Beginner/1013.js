var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let leitor, A, B, C, maiorNumero1, resposta;

leitor = lines.shift().split(' ');
A = parseInt(leitor[0]);
B = parseInt(leitor[1]);
C = parseInt(leitor[2]);

maiorNumero1 = (A + B + Math.abs(A - B)) / 2;
resposta = (maiorNumero1 + C + Math.abs(maiorNumero1 - C)) / 2;

console.log(`${resposta} eh o maior`);