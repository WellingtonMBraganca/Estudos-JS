// Duas expressoes resultar em True com operadores aritimeticos, relacionais e logicos.

/*
Jão precisa comprar chipas, porem ele precisa acordar até 7:30, alem de chegar no prazo de 30 min a padaria,
pois as mesmas ficam prontas as 8 e acabam muito rapido. Porem ele esta sem dinheiro e não é certeza 
que recebera até o momento que for a padaria.  
*/


let dinheiro = true;
let horario730 = true;
let prazo30 = false;
let estoqueChipa = false;

console.log("Jão havia recebido seu salário?", dinheiro);
console.log("Jão acordou antes das 7:30?", horario730);

// Duas expressoes resultar em False com operadores aritimeticos, relacionais e logicos.

console.log("Jão chegou no prazo de 30min?", prazo30);
console.log("Havia estoque para Jão comprar?", estoqueChipa);
console.log("Jão conseguiu as chipas?", dinheiro && horario730 && prazo30 && estoqueChipa);








