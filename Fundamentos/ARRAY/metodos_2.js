const numeros = [1, 2, 3, 4, 6, 9, 8];

numeros.splice(1, 2);//neste metodo temos a remoção de determinado indice do array, onde o primeiro valor
//indica o indice que se iniciara e o segundo a quantidade de elementos que serão excluidos. 
//Assim temos a exclusao dos valores 2 ,3 com indice 1 e 2.

console.log(numeros);
console.log(numeros.pop());//neste metodo nós excluimos o ultimo numero do array.
console.log(numeros.pop());//imprimindo no console, veremos os valores que foram excluidos.

//esses metodos modificam o array, nenhum deles cria novo array.
console.log(numeros);
