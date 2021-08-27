var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [valor1, valor2, valor3] = lines.shift().split(" ");
var abs = parseInt(Math.abs(valor1 - valor2));

var maiorAB = (parseInt(valor1) + parseInt(valor2) + abs) / 2;

if (maiorAB > parseInt(valor3)) {
    console.log(maiorAB + ' eh o maior');
} else {
    console.log(valor3 + ' eh o maior');
}

