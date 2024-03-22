function executar(funcao) {
    if (typeof funcao === "function") {
        console.log(funcao());
    }
}


function bomDia() {
    return "Bom dia!!!"
}
executar(3);
executar(bomDia);

let x = bomDia;
let y = bomDia();

console.log(x());// é preciso se atentar ao que vc invoca na variavel...
// uma vez qyue a ausencia dos parenteses nos diz apenas que estamos invocando o tipo,
// e nao a funcao em si. 
console.log(y);//neste caso, como a funcao ja foi invocada quando se estabeleceu a variavel...
// não precisamos invocala, novamente, inclusive, se  fizermos, apresentara erro.