const a = 4;
const b = 8;

/* let resultado = a / b; // + - / * 

let resultado = 
    resultado == a + b ? a + b : 
        resultado == a - b ? a - b : 
            resultado == a * b ? a * b : a / b;
            
console.log(resultado); */

let Resultado = "subtracao"

if (Resultado === "soma") {
    console.log("4 + 8 =", a + b);
} else if (Resultado === "subtracao") {
    console.log("4 - 8 =", a - b);
} else if (Resultado === "divisao") {
    console.log("4 / 8 =", a / b);
} else if (Resultado === "multiplicacao") {
    console.log("4 * 8 =", a * b);
} 
