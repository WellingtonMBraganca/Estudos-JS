function executar(fn, n1 = 0, n2 = 0) {
    if (typeof fn === "function") {
        console.log(fn(n1, n2));//desta forma podemos deicar aberto os valores para trabalharmos os parametros.
    }//a funcao como parametro sempre recebera 2 outros params.... caso não... retorna 0.
}

function bomDia() {
    return 'Bom dia!!'
}
function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

executar(bomDia); //neste caso, nem valor temos...
executar(somar, 90, 12);
executar(subtrair, 20, 90);
executar(multiplicar, 12, 12);

