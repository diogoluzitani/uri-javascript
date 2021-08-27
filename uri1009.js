var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nomeVendedor = lines.shift();
var salario = parseFloat(lines.shift());
var totalVendas = parseFloat(lines.shift());
var salarioBruto = (salario + (totalVendas*15/100)).toFixed(2)

console.log('TOTAL = R$ ' + salarioBruto);

/* #1009 - Faça um programa que leia o nome de um vendedor, 
o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, 
informar o total a receber no final do mês, com duas casas decimais.*/