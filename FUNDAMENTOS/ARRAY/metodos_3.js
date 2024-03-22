const numeros = [10, 20, 30];

//Formas de percorrer todos os valores.
console.log('Primeira forma.');
//para deixar na mesma linha, mais facil de ver, porem não tem a ver com o conteudo em questão.
let mesmaLinha = '';

for (let i = 0; i < numeros.length; i++) {
    mesmaLinha += numeros[i] += ' ';
}
console.log(mesmaLinha);

console.log('Segunda forma.');
//para deixar na mesma linha, mais facil de ver.
let mesmaLinha2 = '';

for (num of numeros) {
    mesmaLinha2 += num += ' ';
}
console.log(mesmaLinha2);

console.log('Terceira forma.');
numeros.forEach(function () {
    console.log('eleRepeteIssoNoNumeroDeElementosDoForEach...');
})

console.log('Quarta forma.');
//sem função como param...
function paraCadaElemento() {
    console.log('eleRepeteIssoNoNumeroDeElementosDoForEach...');
}

numeros.forEach(paraCadaElemento);

//os parametros do forEach
console.log('explicação params do forEach.');
function paraCadaElemento2(elemento, indice, array) {
    console.log(elemento, indice, array);
}

numeros.forEach(paraCadaElemento2);//caso a função que o forEach receba tenha parametros, ele sempre lerá
//o primeiro como sendo o valor do elemento, o segundo como sendo o indice do elemento e o terceiro como
//o proprio array.
//e isso se repetira na quantidade de vezes do array, como observado.

//da mesma forma, é possível passando a função como param, e da mesma forma o primeiro param da função
//destro do forEach será o elemento, a segunda o indice e a terceira o array.

numeros.forEach(function (_, _, array) { // caso haja necessidade de utlilizar o indice ou o array, e não
    console.log(array);// os outros valores, podemos simplesmente expressar no param da função como _
})//em sua respectiva zona de params, como no exemplo...
//obs: o uso do _ é uma convenção e serve para facilitar a leitura de outros desenvolvedores, mas qualquer
//simbolo surtirá o memso efeito.


