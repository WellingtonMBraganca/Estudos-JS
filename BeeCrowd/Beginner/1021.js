// Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

// Input
// The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).

// Output
// Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let valorInput = parseFloat(lines.shift());

let nota100 = valorInput / 100;
console.log(`${Math.floor(nota100)} nota(s) de R$ 100.00`);
valorInput = valorInput % 100;

let nota50 = valorInput / 50;
console.log(`${Math.floor(nota50)} nota(s) de R$ 50.00`);
valorInput = valorInput % 50;

let nota20 = valorInput / 20;
console.log(`${Math.floor(nota20)} nota(s) de R$ 20.00`);
valorInput = valorInput % 20;

let nota10 = valorInput / 10;
console.log(`${Math.floor(nota10)} nota(s) de R$ 10.00`);
valorInput = valorInput % 10;

let nota5 = valorInput / 5;
console.log(`${Math.floor(nota5)} nota(s) de R$ 5.00`);
valorInput = valorInput % 5;

let nota2 = valorInput / 2;
console.log(`${Math.floor(nota2)} nota(s) de R$ 2.00`);
valorInput = valorInput % 2;

let moeda1 = valorInput / 1;
console.log(`${Math.floor(moeda1)} moeda(s) de R$ 1.00`);
valorInput = valorInput % 1;

let moeda50 = valorInput / 0.5;
console.log(`${Math.floor(moeda50)} moeda(s) de R$ 0.50`);
valorInput = valorInput % 0.5;

let moeda25 = valorInput / 0.25;
console.log(`${Math.floor(moeda25)} moeda(s) de R$ 0.25`);
valorInput = valorInput % 0.25;

let moeda10 = valorInput / 0.1;
console.log(`${Math.floor(moeda10)} moeda(s) de R$ 0.10`);
valorInput = valorInput % 0.1;

let moeda05 = valorInput / 0.05;
console.log(`${Math.floor(moeda05)} moeda(s) de R$ 0.05`);
valorInput = valorInput % 0.05;

let moeda01 = valorInput / 0.01;
console.log(`${moeda01.toFixed(0)} moeda(s) de R$ 0.01`);
