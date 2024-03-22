const data = {
    dia: 1,
    mes: 12,
    ano: 1993
};

//podemos alterar o valores das chaves dos objetos como se fosse variavéis, sem problemas no código.
data.dia = 3;
data.mes = 11;

console.log(`${data.dia}/${data.mes}/${data.ano}`);