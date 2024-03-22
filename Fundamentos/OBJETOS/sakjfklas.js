class Data {
    constructor(dia, mes, ano) {
        this.diaInterno = dia;
        this.mesInterno = mes;
        this.anoInterno = ano;
    }
    mostraData() {
        return console.log(this.diaInterno, this.mesInterno, this.anoInterno);
    }
}

const data = new Data(3, 11, 1993);
data.mostraData();
