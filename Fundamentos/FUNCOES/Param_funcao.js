function somar(a, b, c, d) {
    return a + b + c + d
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));//em JS a linguagem é mais flexivel, não exigindo todos os params,
//porem retornando a variavel que falta como undefined. logo... NaN
console.log('Fim!');//porem isso nao impede que o código continue executando.

//para evitarmos esse problema, podemos atribuir um valor defalt para cada parametro...

function somar(a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
console.log(somar(1, 2));
console.log(somar(1));
console.log(somar());

console.log('Fim!');