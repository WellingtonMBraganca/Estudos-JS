var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let leitor, A, B, C, MaiorAB;

leitor = lines.shift().split(' ');
A = parseInt(leitor[0]);
B = parseInt(leitor[1]);
C = parseInt(leitor[2]);

function maiorNumero(A, B, C) {
    if (A > B && A > C) {
        return A
    } else if (B > C && B > A) {
        return B
    } else return C

}

MaiorAB = maiorNumero(A, B, C)
console.log(`${MaiorAB.toFixed(0)} eh o maior`);