var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var raio = parseFloat(input); // parseFloat transforma os números em decimal

var n = 3.14159;

var area = n * Math.pow(raio,2); // O método Math.pow é substituido por (raio*raio)

console.log(`A=${area.toFixed(4)}`);