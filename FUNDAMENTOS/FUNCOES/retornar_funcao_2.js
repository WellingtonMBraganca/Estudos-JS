function retornaUmaFuncao() {
    return function () {
        return function () {
            return 'Boa Tarde!!'
        }
    }
}

console.log(retornaUmaFuncao); //aqui temos o log da funcao apenas
console.log(retornaUmaFuncao()); //aqui chamamos a funcao dentro da funcao
console.log(retornaUmaFuncao()()); // aqui temos a segunda funcao da funcao retornando.
console.log(retornaUmaFuncao()()());// somente aqui que o retorno da string ocorre, então cada parenteses
//chama o retorno de determinado algo, podendo assim colocar, funcoes dentro de funcoes...
