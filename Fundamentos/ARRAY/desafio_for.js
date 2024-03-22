//percorrer os valores dos arrays iniciando do 9, de forma decrescente e de 2 em 2.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (let impares = numeros.length - 2; impares >=0; impares -=2 ) {
    console.log(numeros[impares]);
}

