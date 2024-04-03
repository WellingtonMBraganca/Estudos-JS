var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let floatInput = lines.shift().split(" ");
let A, B, C;
A = parseFloat(floatInput[0]);
B = parseFloat(floatInput[1]);
C = parseFloat(floatInput[2]);

//bhaskara -b +- Math.sqrt(b**2 - 4ac) /2a

const calcRoots = {
  roots(a, b, c) {
    let passo1 = Math.sqrt(b ** 2 - 4 * a * c);
    let passo2 = -b + passo1;
    let passo3 = -b - passo1;
    let passo4 = 2 * a;
    let R1 = passo2 / passo4;
    let R2 = passo3 / passo4;
    let resultados = [R1, R2];
    if (
      b ** 2 - 4 * a * c < 0 ||
      passo2 === 0 ||
      passo3 === 0 ||
      passo4 === 0
    ) {
      return "Impossivel calcular";
    } else {
      return `R1 = ${resultados[0].toFixed(5)}
R2 = ${resultados[1].toFixed(5)}`;
    }
  },
};

let finalRoots = calcRoots.roots(A, B, C);

console.log(finalRoots);
