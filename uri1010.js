var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [idProdutoA, qtdProdutoA, valorProdutoA] = lines.shift().split(" ");
var [idProdutoB, qtdProdutoB, valorProdutoB] = lines.shift().split(" ");

var totalProdutoA = qtdProdutoA * valorProdutoA;
var totalProdutoB = qtdProdutoB * valorProdutoB;

var totalGeral = totalProdutoA + totalProdutoB;

console.log('VALOR A PAGAR: R$ ' + totalGeral.toFixed(2));

/* #1010 Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, 
o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o 
valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago..*/