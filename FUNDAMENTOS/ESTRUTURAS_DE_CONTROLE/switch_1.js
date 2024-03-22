let nota = 12;

switch(Math.ceil(nota)) { //Math.ceil() é função de arredondamento para cima, sempre cai no próximo numero inteiro.
    case 10: case 9: case 8: case 7: // os cass podem ser dispostos na mesma linha, ou em linhas diferentes.
        console.log("Parabéns!!");
        break // Caso não haja break, o codigo continuara para a proxima função, executando juntamente com esta...
    case 6:
    case 5:
        console.log("Recuperação.");
        break
    case 4:
    case 3:
    case 2:
        console.log("Reprovado.");
        break
    case 2:
    case 1:
        console.log("MUITO REPROVADO... sahuehsuheuhas!!");
        break
    default:
        console.log("Nota invalida burrão...");
}