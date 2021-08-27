var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [x1, y1] = lines.shift().split(" ");
var [x2, y2] = lines.shift().split(" ");

var calculo = (((parseFloat(x2) - parseFloat(x1)) ** 2) + ((parseFloat(y2) - parseFloat(y1)) ** 2));
var distancia = Math.sqrt(calculo);

console.log(distancia.toFixed(4));


