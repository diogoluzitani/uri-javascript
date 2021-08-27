var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = parseInt(lines.shift());
var y = parseFloat(lines.shift());
var saida = (x / y);

console.log(saida.toFixed(3) + ' km/l');

