function retornaUmaFuncao() {
    function bomDia() {
        return 'Bom dia!!!!!!!!!!!!!'
    }
    return bomDia;
}

console.log(retornaUmaFuncao);//aqui chamamos a funcao sem invoca-la
console.log(retornaUmaFuncao());//aqui invocamos a funcao bomDia
console.log(retornaUmaFuncao()());// aqui invocamos a funcao dentro da funcao retornando a string.

var variavelDeFuncao = retornaUmaFuncao();
console.log(variavelDeFuncao());// aqui criamos uma variavel e invocamos assim a funcao pela var...