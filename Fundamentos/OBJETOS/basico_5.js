//é possivel utilizar dentro do objeto, toda sorte de outras estruturas... 
//string, numeros, outro objeto, array, funçoes, boolean.

const cliente = {
    código: 123648,
    nome: 'Jucicléia',
    endereco: {
        logradouro: 'casa do carvalho',
        numero: 667,
        complemento: 'Logo apos a bota de Judas.',
        pontoRef: ['depois das botas de judas', 'se chegar na casa do c**, ja passou...']
    },
    nomesFilhos: ['Jão', 'Jalim Rabei']
};

console.log(cliente.endereco.complemento);//podemos acessar as subchaves dos objetos desta forma.
console.log(cliente.endereco.pontoRef[1]);//podemos acessar os valores dos arrays normalmente...
