function randomLoteryNumber() {
    let decimalNumber = Math.random();
    let decimalMultiplication = decimalNumber * 60;
    let aprocimation = Math.floor(decimalMultiplication);
    let adicaoUm = aprocimation + 1;

    return adicaoUm.toString().padStart(2, 0);
}

for (let sequencia = 1; sequencia <= 6; sequencia++){  
     console.log(randomLoteryNumber());
}