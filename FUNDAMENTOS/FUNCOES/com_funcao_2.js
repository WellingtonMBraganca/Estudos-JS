let dia1 = 3;
let mes1 = 12;
let ano1 = 2022;

function exibirData(d, m, a)  { //podemos definir parametros nos parenteses e simplesmente mostrar onde
    console.log(`${d}/${m}/${a}`);// serao aplicados no bloco.
}
let dia2 = 6;
let mes2 = 5;
let ano2 = 2023;

exibirData(dia1, mes1, ano1);// assim, não precisamos criar varias funcoes para o mesmo algoritimo, apenas
exibirData(dia1, mes1, ano1);// alterar os parametros.
exibirData(dia1, mes1, ano1);

exibirData(dia2, mes2, ano2);//temos a mesma função, com parametros diferentes.
exibirData(dia2, mes2, ano2);//basta defini-los nos parenteses.
exibirData(dia2, mes2, ano2);