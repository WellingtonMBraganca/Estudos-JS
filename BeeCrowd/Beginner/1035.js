// Read 4 integer values A, B, C and D.
// Then if B is greater than C
// and D is greater than A
// and if the sum of C and D is greater than the sum of A and B
// and if C and D were positives values
//and if A is even,
// write the message “Valores aceitos” (Accepted values). Otherwise, write the message “Valores nao aceitos” (Values not accepted).

// Input
// Four integer numbers A, B, C and D.

// Output
// Show the corresponding message after the validation of the values​​.

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let inputNumbers = lines.shift().split(" ");
let A, B, C, D;
A = parseInt(inputNumbers[0]);
B = parseInt(inputNumbers[1]);
C = parseInt(inputNumbers[2]);
D = parseInt(inputNumbers[3]);

function comparaValores(priA, segB, terC, quarD) {
  let greaterBC, greaterAD, greaterSumABCD, positiveCD, moduleA, evenA;
  greaterBC = segB > terC;
  greaterAD = quarD > priA;
  greaterSumABCD = terC + quarD > priA + segB;
  positiveCD = terC > 0 && quarD > 0;
  moduleA = priA % 2;
  evenA = moduleA === 0;
  if (
    greaterBC &&
    greaterAD &&
    greaterSumABCD &&
    positiveCD &&
    evenA === true
  ) {
    return "Valores aceitos";
  } else return "Valores nao aceitos";
}

let finalResult = comparaValores(A, B, C, D);

console.log(finalResult);
