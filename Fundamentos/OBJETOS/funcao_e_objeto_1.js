//para simplificarmos o problema de se fazer o objeto de forma literal, temos algumas opções mais práticas.
function formatData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        exibirData() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

const dataNascimento = formatData(3, 11, 1993);

console.log(dataNascimento.exibirData());

function formatData2(dia, mes, ano) {//existem simplificaçoes que podem ser feitas, como não atribuir valor
    return {         //para a chave desse objeto, uma vez que o nome é o mesmodo parametro, 
        dia, mes, ano,     //simplesmente separando por virgulas...  sem que haja comprometimento do código.
        exibirData() {        //Bem como excluir os 2: e function da função, uma vez que ele ja interpreta 
            return `${this.dia}/${this.mes}/${this.ano}`//como tal.
        }
    }
}
const nascimento = formatData2(3,11,1993);
console.log(nascimento.exibirData());