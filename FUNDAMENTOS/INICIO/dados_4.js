/*
temos o termo var e let que determinam variaveis no codigo...
valores que podem sofrer alteraçoes de um bloco para outro, ou mesmo de uma sentença a outra. 
*/
let a = 3;
console.log(a);

//.....
//......
a = a + 10;
console.log(a);

//...
//...
 
/*
por sua vez, temos a variável constante (const), que é uma constante e
não pode ser alterada, provocando erros no código caso tente altera-la.
*/

const ab = 3;
console.log(ab);

//ab = ab + 10 
//o código apresentará erro caso haja tentativa de modificar uma constante.