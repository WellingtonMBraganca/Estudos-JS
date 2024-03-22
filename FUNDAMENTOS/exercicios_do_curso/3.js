function calculoSalario(horasTrabalhadas, valorPorHora) {
    let valorLiquido, ValorBruto;
    ValorBruto = horasTrabalhadas * valorPorHora;
    valorLiquido = ValorBruto * 0.7;
    return 'Salário igual a R$' +  valorLiquido;//na resolução pede para subtrair 30% referente a imposto.
}

let salarioFinal = calculoSalario(100, 36);
console.log(salarioFinal);