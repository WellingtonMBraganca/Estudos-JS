const trabalho1 = true; 
const trabalho2 = true;

let comprarTV50 = trabalho1 && trabalho2 // And
console.log('Vamos comprar a TV de 50"? ', comprarTV50); 

let comprarTV32 = trabalho1 !== trabalho2 // Xor
console.log('Vamos comprar a TV de 32"? ', comprarTV32);

let tomarSorvete = trabalho1 || trabalho2; // Or
console.log('Vamos comprar sorvete"? ', tomarSorvete);

let ficarEmCasa = !tomarSorvete // Not
console.log('Vamos ficar em casa"? ', ficarEmCasa);

/* function sum(a, b){
    return a + b
}
let Fx = sum(10, 7) 
console.log(Fx); */