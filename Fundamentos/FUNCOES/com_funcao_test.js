let dia1 = 3;
let mes1 = 12;
let ano1 = 2022;

function exibeData(dia, mes, ano){
    let diaStr = dia.toString().padStart(2, '0');
    let mesStr = mes.toString().padStart(2, '0');

    let resultado = `${diaStr}/${mesStr}/${ano}`
    console.log(resultado);
}

let dia2 = 6;
let mes2 = 5;
let ano2 = 2023;

exibeData(dia1, mes1, ano1);// assim, não precisamos criar varias funcoes para o mesmo algoritimo, apenas
exibeData(dia1, mes1, ano1);// alterar os parametros.
exibeData(dia1, mes1, ano1);


exibeData(dia2, mes2, ano2);//temos a mesma função, com parametros diferentes.
exibeData(dia2, mes2, ano2);//basta defini-los nos parenteses.
exibeData(dia2, mes2, ano2);



