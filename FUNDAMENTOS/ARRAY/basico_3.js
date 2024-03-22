console.log(typeof console); //o console é um objeto.
console.log(typeof console.log); //o log é um metodo, que nada mais é que uma funcao que pertence a um objeto.
// objeto é como se fosse uma pasta de computador. No objeto conseguimos armazenar funcoes e atributos.

const numeros = [1, 2, 3];
console.log(typeof numeros);// da mesma forma, um array é um objeto que pode receber metodos(funcoes), e
//atributos...

numeros.push(4,5); // com o push por exemplo, que é função que adiciona valores ao array.
numeros.push(6);
numeros.push(7);

console.log(numeros);
//Na janela de sugestões de autocomplete, temos as funções (cubos roxos), e atributos (parelelepipedos azuis).
//Os atributos não recebem parenteses.
console.log(numeros.length);// aqui por exemplo, temos um atributo para o objeto numeros (array).