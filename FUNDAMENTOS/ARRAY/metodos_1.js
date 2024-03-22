const numeros = [1, 2, 3, 4, 5];
//um pouco a respeito de determinadas funções nos arrays.

numeros[0] = 100; //aqui trocamos o valor do indice zero para 100...
numeros.push(6);// aqui adicionamos um novo indice a posição 5 de valor 6.
const numeros2 = numeros.concat(7, 8, 9);// aqui concatenamos esses 3 novos valores a uma segunda variavel,
//utilizando dos valores do array numeros... não é possivel adicionar com essa função sem criar outra var.
//por exemplo, se apenas colocarmos numeros.concat(7,8,9); não funcionara.

console.log(numeros.join(' - '));//com essa funcao, juntamos os elementos do array pelo que esta indicado.
console.log(numeros);
console.log(numeros2);//somente assim funcionará o concat... pela numa var, que recebera um novo array.
console.log(numeros.includes(10));//includes nos indica se um valor se encontra no array.
console.log(numeros.includes(100));
console.log(numeros.indexOf(4));//nessa funcao perguntamos qual é o indice de um determinado valor.
console.log(numeros.indexOf(4, 4));//desta forma podemos perguntar a partir de um determinado indice,
//como desta forma onde coloquei para pesquisar a partir do 4° indice, e ele retorna uma resposta -1,
//que representa a ausencia de tal valor.



