var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [valor1, valor2, valor3] = lines.shift().split(" ");
const pi = parseFloat(3.14159);

var triangulo = parseFloat(valor1 * valor3) / 2;
var circulo = parseFloat(pi * (valor3 ** 2));
var trapezio = (((parseFloat(valor1) + parseFloat(valor2)) * parseFloat(valor3)) / 2);
var quadrado = (valor2 * valor2);
var retangulo = (valor1 * valor2);

console.log('TRIANGULO: ' + triangulo.toFixed(3));
console.log('CIRCULO: ' + circulo.toFixed(3));
console.log('TRAPEZIO: ' + trapezio.toFixed(3));
console.log('QUADRADO: ' + quadrado.toFixed(3));
console.log('RETANGULO: ' + retangulo.toFixed(3));


