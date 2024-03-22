var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let recebido = lines.shift().split(' ');
let code = parseInt(recebido[0])
let unidades = parseInt(recebido[1])
let preco = parseFloat(recebido[2])

let recebido2 = lines.shift().split(' ');
let code2= parseInt(recebido2[0])
let unidades2 = parseInt(recebido2[1])
let preco2 = parseFloat(recebido2[2])

let total = ((unidades * preco) + (unidades2 * preco2));

console.log(`VALOR A PAGAR: R$ ${total}`);