function gerarNumeroAleatorio(numerosGerados) {
    var numeroDecimalAleatorio, numeroMultiplicado, numeroArredondado, numeroFinal;
    do {
        numeroDecimalAleatorio = Math.random();
        numeroMultiplicado = numeroDecimalAleatorio * 60;
        numeroArredondado = Math.floor(numeroMultiplicado);
        numeroFinal = numeroArredondado + 1;
        numeroFinal = numeroFinal.toString().padStart(2, '0');
    } while (numerosGerados.includes(numeroFinal));
    numerosGerados.push(numeroFinal);
    return numeroFinal;
}
var numerosGerados = [];
for (var i = 0; i < 6; i++) {
    console.log(gerarNumeroAleatorio(numerosGerados));
}