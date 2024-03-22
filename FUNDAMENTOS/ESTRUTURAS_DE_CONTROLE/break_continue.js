//break 
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        break; // alcançando a igualdade determinada pelo if,
    }          // o break é ativo e o código sai desse contexto de for.
    console.log(i);
}

//continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; //no caso do continue, o código somente sai do contexto proposto, 
    }             // executando o proximo passo no mesmo contexto de for. pulou apenas o 3...
    console.log(i);
}