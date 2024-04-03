var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let inputNunber = parseFloat(lines.shift());

function determinaIntervalo(A) {
  if (A >= 0 && A <= 25) {
    return "Intervalo [0,25]";
  } else if (A > 25 && A <= 50) {
    return "Intervalo (25,50]";
  } else if (A > 50 && A <= 75) {
    return "Intervalo (50,75]";
  } else if (A > 75 && A <= 100) {
    return "Intervalo (75,100]";
  } else return "Fora de intervalo";
}

let recebido = determinaIntervalo(inputNunber);
console.log(recebido);
