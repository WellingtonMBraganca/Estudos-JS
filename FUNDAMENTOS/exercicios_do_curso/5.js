function primeiroMaiorOuIgual(a, b) {
    return a >= b;
}

console.log(primeiroMaiorOuIgual(1, 2));

//forma feita na resolução.
function primeiroESegundo(primeiro, segundo) {
    if (typeof primeiro != typeof segundo) return false

    return primeiro >= segundo;
}

console.log(primeiroESegundo(6, 2));