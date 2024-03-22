/*
Podemos gerar problemas quando fazemos um objeto de forma literal, definindo dia, me e ano por exemplo.
Para cada mudança que vc precise fazer em alguma chave do objeto, um novo objeto precisará ser criado, 
gerando assim, uma grande quantoidade de códigos desnecessarios.
No caso do exemplo abaixo, podemos ver isso, porem ainda assim temos de ter em mente que este é um 
objeto pequeno, 3 atributos e 1 metodo... Porém podemos imaginar se houver a necessidade de um 
objeto mais complexo...
Alem do excesso de códigos duplicados, o que pode ser grande problema para aplicação.
*/
const data1 = {
    dia: 3,
    mes: 11,
    ano: 1993,
    exibirData: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data2 = {
    dia: 3,
    mes: 12,
    ano: 1999,
    exibirData: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data3 = {
    dia: 4,
    mes: 9,
    ano: 1993,
    exibirData: function () {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}