
let a = 7;
let b = 94;

//trocar os valores das variáveis... a = 94 e b = 7 

//podemos aplicar 2 sistemas para a troca de valores...
console.log("primeira forma");

let temp = a; //assim tornamos o valor de a com o comando temp como um valor temporario.
a = b
b = temp

console.log(a);
console.log(b);

//ou então podemos fazer por meio de colchetes, onde temos.

[a, b] = [b, a]

console.log(a);
console.log(b);
