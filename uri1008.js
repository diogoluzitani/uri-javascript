var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numeroFuncionario = parseInt(lines.shift());
var horasTrabalhadas = parseInt(lines.shift());
var valorHora = parseFloat(lines.shift());
var salario = (horasTrabalhadas*valorHora).toFixed(2)

console.log('NUMBER = ' + numeroFuncionario);
console.log('SALARY = U$ ' + salario);

/* #1008 - Escreva um programa que leia o número de um funcionário, 
seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. 
A seguir, mostre o número e o salário do funcionário, com duas casas decimais. */