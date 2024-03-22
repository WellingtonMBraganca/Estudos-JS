const notas = [1, 2, 3, 4, 5, 6, 7, 8];

for (nota of notas) {// com esse comando temos um laço que percorre todos os elementos do array
    console.log(nota);//FOR(variavel OF array). o laço ira percorrer os valores dos indices
}// do array, onde cada vez
//o array terá o valor de seu indice, começanmdo no indice 0 que vale 1, indice 1 que vale 2... 
//até concluir o laço.

console.log('valores na mesma linha');
let valores = '';

for (nota of notas) {// aqui por exemplo temos como mostrar os itens na mesma linha.
    valores += nota + ' ';//como fizemos da variavel valores um string vazio, ele irá concatenar os valores
}// e não soma-los.

console.log(valores);

console.log('mostrando os indices');
//para percorrermos nos indices do array devemos utilizar a linha de comando FOR(variavel IN ARRAY){}

let indices = '';
for (ind in notas) {
    indices += ind + ' ';
}
console.log(indices);

