//função construtora (classe).
function Produto() {//convencionalmente, funções construtoras se iniciam com maiúscula.
    console.log(this);
}

const p1 = new Produto();//quando temos uma função que é chamada juntamente com a palavra new,
//temos assim uma função contrutora.
//Pois essa função será responsavel por criar um novo objeto toda vez que for chamada juntamente de new.

//assim, costuma ser melhor gerar uma função construtora, ao invez de criar funçoes literais.
function Data(dia = 1, mes = 1, ano = 1) {
    this.diaInterno = dia;
    this.mesInterno = mes;
    this.anoInterno = ano;

    this.exibir = function(){
        return `${this.diaInterno}-${this.mesInterno}-${this.anoInterno}`//podemos até mesmo utilizar metodos a função, sem problemas no codigo.
    }
}
//a função construtora define como o objeto sera, seus atributos e metodos, a partir de uma unica função construtora.
//a função construtora acima, por exemplo, possui 3 atributos e um metodo.
const data1 = new Data();
const data2 = new Data(3, 11,3); 
const data3 = new Data(30, 7, 1999);

console.log(data1);
console.log(data2);
console.log(data3);
console.log(data1.exibir());
console.log(data2.exibir());
console.log(data3.exibir());

/*
Em suma, a função construtora(classe), é basicamente um molde que irá definir os atributos e os metodos de um 
determinado objeto que vc precisa criar. Atravez da palavra NEW nos criamos esse objeto, porém o mesmo não
irá diferenciar dos atributos e metodos de sua função construtora.
o Conceito de classe é mais usual em outras linguagens, em JS não costuma ser tão utilizado, porém existe a 
possibilidade da utilização, conforme necessidade. Da mesma forma a classe define como o objeto irá se comportar
e suas caracteristicas.
*/
