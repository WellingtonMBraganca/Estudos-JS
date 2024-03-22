let hora = 11;
let saudacao = hora <= 12 ? "Bom dia!" : "Boa tarde!!"; // aqui temos um operador ternario.
//onde temos que hora menor ou igual a 12, verdadeiro, maior que 12, falso.
// assim o valor logo apos o interrogação sera o verdadeiro e o apos os : o falso.
// o operador ternario é separado por 3 partes, sendo a primeira (<=12) a expressao.
// a segunda apos o interrogação (Bom dia!) true.
// aterceira apos os : (Boa tarde!!) false.
console.log(saudacao);

// Para adicionarmos uma terceira opção podemos utilizar de um segundo operador ternario, onde 
// caso seja falso a primeira afirmação, cairá na segunda expressao.

let saudaca2 = hora <=12 ? "Bom dia" : hora <=17 ? "Boa tarde!" : "Boa noite!!!";

console.log(saudaca2);