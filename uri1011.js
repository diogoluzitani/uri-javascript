var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseInt(lines.shift());
const pi = parseFloat(3.14159);

var volume = ((4.0 / 3) * pi * (raio ** 3));

console.log('VOLUME = ' + volume.toFixed(3));


/* #1010 Neste problema, deve-se ler o código de uma peça 1, o número de peças 1,
o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o
valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago..*/