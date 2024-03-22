class Data {// aqui temos uma função.
    // dia = 30
    // mes = 8
    // ano = 1999
    constructor(d, m, a) {
        this.dia = d;//aqui temos o comando que nos permite construir com os dados qyue temos.
        this.mes = m;//podendo inclusive, utilizar apenas o construtor neste caso...
        this.ano = a;
    }
    exibir() {
        return `${this.dia}-${this.mes}-${this.ano}`//caso queiramos adicionar função,
    }//no comando de classe, criamos assim, basta adicionar os parenteses.
}

const d1 = new Data// ja aqui com a utilização do NEW temos um objeto.
console.log(typeof Data);
console.log(typeof d1);
d1.dia = 24
d1.mes = 12//podemos atribuir valores variados as caracteristicas...
d1.ano = 1999
console.log(d1);

const d2 = new Data(16,12,2525);
console.log(d2);
console.log(d2.exibir());






