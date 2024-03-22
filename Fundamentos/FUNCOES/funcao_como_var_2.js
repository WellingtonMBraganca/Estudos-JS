function subtrair(a, b) {
    return a - b;
}

const subtracao = subtrair;// PODEMOS ARMAzenar como variavel, atribuindo o proprio nome da funcao a variavel.

console.log(subtracao(5, 2)); //ambas formas irao funcionar.
console.log(subtrair(5, 2));