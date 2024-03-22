let hora = 23;
let saudacao;

/* o if/else é considerado uma unidade como um todo... 
logo sempre sera executado como uma unidade, 
sendo assim, não ha necessidade de chaves.
podendo inclusive, ser rapetido de acordo                                      
com a necessidade de possibilidades... */

if (hora < 12) {
    saudacao = "Bom dia!";
} else if (hora < 18) {
    saudacao = "Boa tarde!"

} else if (hora < 22) {
    saudacao = "Boa noite!"

} else {
    saudacao = "Muito tarde!!!"
}

console.log(saudacao);