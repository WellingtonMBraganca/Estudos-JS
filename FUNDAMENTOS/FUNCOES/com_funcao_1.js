let dia1 = 3;
let mes1 = 12;
let ano1 = 2022;
//funcao é um bloco de codigo que foi dado nome e pode ser utilizado sempre que necessario.
function exibirData1()  { // a funcao sempre se faz necessario a utilizacao de um nome logo apos o termo function.
    console.log(`${dia1}/${mes1}/${ano1}`);// o que a funcao vai exibir deve sempre estar dentro de chaves.
}
let dia2 = 6;
let mes2 = 5;
let ano2 = 2023;

function exibirData2() {
    console.log(`${dia2}-${mes2}-${ano2}`);
}

exibirData1();// desta forma podemos chamar a funcao sempre que necessario.
exibirData1();
exibirData1();

exibirData2();
exibirData2();
exibirData2();