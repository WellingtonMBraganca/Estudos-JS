/* 
funcao para converter temperatura de 73 farenheit para celsius.
a equação para tal é a seguinte.
F - 32 =   C
------   -----
  9        5
*/

function farenheitParaCelsius(F) {  
    let farenheitMenos32 = F - 32;
    let multiplicadoPor5 = farenheitMenos32 * 5;
    let multiplicadoPor5DivididoPor9 = multiplicadoPor5 / 9;
    return multiplicadoPor5DivididoPor9.toString().padStart(2, 0);
}

let resultadoFarParaCel = farenheitParaCelsius;

console.log(resultadoFarParaCel(36));