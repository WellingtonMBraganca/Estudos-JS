 /*
 blocos são separados por chaves {}, 
 e podem haver blocos dentro de blocos, 
 porem quando isso ocorre, um subbloco 
 deve ser finalizado dentro de sua chave inicial.
Desta forma {1  {2   2}  1} 
Os blocos contem sentencas de códigos. ;;;;
 */
{
    console.log ("passo #01");
    console.log ("passo #02");
    console.log ("passo #03");
}
{
    afsdgasdg
}
{
    console.log ("passo #04");
    console.log ("passo #05");
}
/*
uma vez que os comandos vão sendo executados de forma sequencial, de cima para baixo
caso haja algum erro, é possivel verificar onde o mesmo ocorreu.
por exemplo, podemos verificar que ocorreu algum erro por comando desconhecido entre 
o primeiro e segundo bloco.
*/
{
    console.log ("passo #01");
    console.log ("passo #02");
    console.log ("passo #03");
}
{
    ;
    ;
    ;
    ;//podemos criar sentenças vazias sem que a execução do codigo seja prejudicada...
}
{
    console.log ("passo #04");
    console.log ("passo #05");
}