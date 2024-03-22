// arrays sao indexados (index), ou seja, cada elemento é um determinado indice, iniciando em zero.
//  indice     0  1  2   3   4    5
const notas = [5, 4, 6, 10, 6.5, 7.5];

console.log(notas);//assim temos exibido todos os elementos do array.
console.log(notas[4]);// ou podemos exibir apenas um determinado, iniciando do zero. 
console.log(notas[5]);
console.log(notas[6]);// Pode retornar como indefinido, caso não haja o index especifico.

notas[4] = 5.6;
console.log(notas);// é possivel alterar os elementos do array, porem não a quantidade deles.
