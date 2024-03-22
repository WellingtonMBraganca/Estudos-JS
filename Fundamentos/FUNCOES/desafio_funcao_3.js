// sistema que detrminara se o aluno se encontra aprovado oui reprovado.
// notas: 7,8 - 3,1 - 6,7
// o sistema utiliza apenas media das 2 maiores notas como parametro.
// status: ap 7/10 recup 4/6,9 rep 0/3,9


//     W1+W2+w3
// M = --------
//       (N)

let nota1 = 7.8;
let nota2 = 3.1;
let nota3 = 6.7;

function valorMenor(n1, n2) {
    return n1 <= n2 ? n1 : n2;    
}

function mediaFinal(n1, n2, n3) {
    let excluirMenor = valorMenor(n1, valorMenor(n2, n3));
    if(excluirMenor === n1){
        return (n2 +n3) / 2;
    }else if (excluirMenor === n2) {
        return (n1 + n3) / 2;
    }else{
        return (n1+n2) / 2;
    }
}

let notaFinal = mediaFinal(nota1, nota2, nota3);

function resultadoFinal(NF) {
    if (NF <= 10 && NF >= 7) {
        return `Sua média final é: ${NF}.\nParabéns, você esta aprovado!!`
    } else if (NF < 7 && NF >= 4) {
        return `Sua média final é: ${NF}.\nVocê esta de recuperação...`
    } else if (NF < 4 && NF >= 0) {
        return `Sua média final é: ${NF}.\nInfelizmente você esta reprovado.`
    } else {
        return `Nota inválida!`
    }
}

console.log(resultadoFinal(notaFinal));