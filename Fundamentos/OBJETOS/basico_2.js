const produto = {
    nome: 'PCPositivoLixoso',
    valor: 'R$' + 9.99,            //os atributos e comportamentos do objeto sao seus membros.
    desconto: 0.15,
    precoComDesconto: function () {
        return this.valor * (1 - this.desconto)//sempre que quisermos referenciar um valor dentro do
    }//prorpio objeto, devemos utilizar this, caso contrario o código apresentará erro.
}

console.log(produto.nome);
console.log(produto.precoComDesconto());

