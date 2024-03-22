let a = 1;
let b = 2;

a++;
b++;
console.log(++a == b++); // nesta equação temos como verdadeiro, pois  operadores unarios prefix (++a)
// possuem prioridade em relação ao postfix (b++).
console.log(a++ == b++); // esse código é menos confuso, alem de mais simples... devemos prioriza-lo.
