function somar1(a, b) {
    return a + b;
}

console.log(somar1(2, 2));

function somar2(a) {
    return function (b) {
        return a + b;
    }
}

console.log(somar2(2)(2)); //para esses valores de funcao dentro de funcao, cada parenteses chama 
//um parametro para a funcao adentro da funcao, se houvesse uma tercveira, 
//o terceiro parenteses seria seu parametro.
/*
a importancia desses particionamentos de funcao se da por exemplo , caso vc queira colocar um valor 
constante para determinada conta, como por exemplo, caso vc sempre queira somar 10 ao valor variavel em 
questao.
*/
//podemos assim salvar versoes da funcao, com partes dos parametros resolvidos... dependendo da necessidade.
// por exemplo:
const somaMais10 = somar2(10);
//aqui criamos uma constante com a soma de 10 para o primeiro param, e quando for colocado o (),
//ja sera o param para a segunda funcao.

console.log(somaMais10(20));
console.log(somaMais10(10));