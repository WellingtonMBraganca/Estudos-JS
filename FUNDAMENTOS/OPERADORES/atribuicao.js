let x = 10;

x = x +6;
x = x - 1; // sempre se considera o valor atribuido imediatamente antes da nova atribuição, logo 
//a resposta sera 15 para X.

console.log(x);

//porem existe uma segunda forma para essas atribuições, podendo ser com todas os operadores aritméticos.

let y = 20;

y += 10; // assim temos que é uma atribuição aditiva, não substituindo, mas acrecentando a y.
y -= 2;
y *= 2 ;
y /= 4;
y %= 3;
// assim temos a sobra do resultado da divisao como 2.
console.log(y);

let w = "texto";
w += ", mais texto";
w += "!!!!";

console.log(w);
