function notaFinal(nota) {
    switch (nota) {
        case 0: return 'F';
        case 1: return 'E';
        case 2: return 'E+';
        case 3: return 'D';
        case 4: return 'D+';
        case 5: return 'C';
        case 6: return 'C+';
        case 7: return 'B';
        case 8: return 'B+';
        case 9: return 'A';
        case 10: return 'A+';
        default: null;
    }
   
}


console.log(notaFinal(6));
