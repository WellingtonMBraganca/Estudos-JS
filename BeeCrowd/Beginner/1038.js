var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let inputValue = lines.shift().split(" ");
let code = parseInt(inputValue[0]);
let quantit = parseInt(inputValue[1]);

let valor = [0.0, 4.0, 4.5, 5.0, 2.0, 1.5];
let valorCodigo = valor[code];

function totalPrice(quantidade, preco) {
  return (quantidade * preco).toFixed(2);
}

console.log(`Total: R$ ${totalPrice(quantit, valorCodigo)}`);
