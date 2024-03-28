var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let employee, workedHours, hourValue;

employee = parseInt(lines.shift());
workedHours = parseInt(lines.shift());
hourValue = parseFloat(lines.shift());

let salary = workedHours * hourValue;

console.log(`NUMBER = ${employee}\nSALARY = U$ ${salary.toFixed(2)}`);
