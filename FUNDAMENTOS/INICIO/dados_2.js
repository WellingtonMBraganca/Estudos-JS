/*
    é importante a criação de identificadores com nomes que sejam bons, seja na pasta,
    no arquivo, ou mesmo na variavel VAR ou LET...;
*/
let preco = 19.90;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);

console.log(preco * desconto);
console.log(preco * (1 - desconto));
console.log(precoComDesconto);

let nome = "caderno"; //aspas determina uma string que é um texto.
let categoria = "papelaria";

console.log("produto: " + nome
    + ", categoria: " + categoria
    + ", valor: " + preco
    + ", desconto %: " + desconto
    + ", Valor Total: " + precoComDesconto);

console.log(
        `produto: ${nome},
        categoria: ${categoria},
            `)