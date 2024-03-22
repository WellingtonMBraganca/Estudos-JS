/*
objeto data
atributos
dia, mes e ano
metodo exibir
'dia/mes/ano'
*/
const data = {
    dia: 3,
    mes: 11,
    ano: 1993,
    exibirData: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data.exibirData());

