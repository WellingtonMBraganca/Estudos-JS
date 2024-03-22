const numeros = [10, 20, 30];

const produto = {
    nome: 'Jalim Rabei',//em um objeto temos sempre um par separado de outro por uma virgula.
    valor: 'R$' + 9.99,
    desconto: 0.2
}//(chave     valor) = par

console.log(numeros[0]);
console.log(produto['nome']);//da mesma forma que acessamos um elemento de um array, podemos acessar o de
//um objeto, por meio dos colchetes.
console.log(produto.nome);//porem a forma mais utilizada e facil é por meio do ponto.
console.log(typeof produto);
console.log(produto.valor);
console.log(produto);