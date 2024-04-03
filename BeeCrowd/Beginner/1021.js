// Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

// Input
// The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).

// Output
// Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valor,
  nota100,
  nota50,
  nota20,
  nota10,
  nota5,
  nota2,
  moeda1,
  moeda05,
  moeda025,
  moeda01,
  moeda005,
  moeda001;

valor = parseFloat(lines.shift());

nota100 = Math.floor(valor / 100);
sobrouNota100 = (valor % 100).toFixed(2);

nota50 = Math.floor(sobrouNota100 / 50);
sobrouNota50 = (sobrouNota100 % 50).toFixed(2);

nota20 = Math.floor(sobrouNota50 / 20);
sobrouNota20 = (sobrouNota50 % 20).toFixed(4);

nota10 = Math.floor(sobrouNota20 / 10);
sobrouNota10 = (sobrouNota20 % 10).toFixed(2);

nota5 = Math.floor(sobrouNota10 / 5);
sobrouNota5 = (sobrouNota10 % 5).toFixed(2);

nota2 = Math.floor(sobrouNota5 / 2);
sobrouNota2 = (sobrouNota5 % 2).toFixed(2);

moeda1 = Math.floor(sobrouNota2);
sobrouMoeda1 = (sobrouNota2 % 1).toFixed(2);

moeda05 = Math.floor(sobrouMoeda1 / 0.5);
sobrouMoeda05 = (sobrouMoeda1 % 50).toFixed(2);

moeda025 = Math.floor(sobrouMoeda05 / 0.25);
sobrouMoeda025 = (sobrouMoeda05 % 0.25).toFixed(2);

moeda01 = Math.floor(sobrouMoeda025 / 0.1);
sobrouMoeda01 = (sobrouMoeda025 % 0.1).toFixed(2);

moeda005 = Math.floor(sobrouMoeda01 / 0.05);
moeda001 = Math.ceil(sobrouMoeda01 % 0.05);

console.log("nota 100");
console.log(nota100);
console.log(sobrouNota100);

console.log("nota 50");
console.log(nota50);
console.log(sobrouNota50);

console.log("nota 20");
console.log(nota20);
console.log(sobrouNota20);

console.log("nota 10");
console.log(nota10);
console.log(sobrouNota10);

console.log("nota 5");
console.log(nota5);
console.log(sobrouNota5);

console.log("nota2");
console.log(nota2);
console.log(sobrouNota2);

console.log("moeda 1");
console.log(moeda1);
console.log(sobrouMoeda1);

console.log("moeda 05");
console.log(moeda05);
console.log(sobrouMoeda05);

console.log("moeda 025");
console.log(moeda025);
console.log(sobrouMoeda025);

console.log("moeda 010");
console.log(moeda01);
console.log(sobrouMoeda01);

console.log("moeda 005");
console.log(moeda005);

console.log("moeda 001");
console.log(moeda001);
