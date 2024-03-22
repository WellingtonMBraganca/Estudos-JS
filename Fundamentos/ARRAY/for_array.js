//todo esse metodo pode ser substituido pelo FOR(variavel OF array)

const numeros = [1, 2, 3, 4, 5, 6, 356, 9, 12];

for (let index = 0; index < 6; index++) {
    console.log(index, numeros[index]);//aqui por exemplo temos uma estrutura de for direcionada para o array.
    //onde podemos listar os índices do array e seus respectivos elementos.
}

console.log('segundo');

for (let index = 0; index < numeros.length; index++) {
    console.log(index, numeros[index]);//aqui temos que as repetiçoes ocorrerao de acordo com o tamanho do
}//array, ao passo que na primeira, paramos em uma quantidade especifica.
//desta forma, o aumento pode ser dinamico, que as repetições tbm serão.

console.log('terceiro');
for (let index = 1; index < numeros.length; index += 2) {// esse for é flexivel, podendo pular de 2 em2
    console.log(index, numeros[index]);//podendo iniciar a partir de qualquer indice...
}