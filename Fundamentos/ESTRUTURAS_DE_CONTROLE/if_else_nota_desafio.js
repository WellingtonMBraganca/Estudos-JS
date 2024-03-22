const nota = 13;

if (nota <= 10 && nota >= 9.0) {
    console.log("A");
} else if (nota < 9 && nota >= 7) {
    console.log("B");
} else if (nota < 7 && nota >= 5) {
    console.log("C");
} else if (nota < 5 && nota >= 4.5) {
    console.log("D");
} else if (nota < 4.5 && nota >= 0) {
    console.log("F");
} else {
    console.log("Valor informado invalido, favor informar numeros etre 0,0 e 10,00.");
}