var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines.shift()).toFixed(1);
var b = parseInt(lines.shift()).toFixed(1);
var media = ((a*3.5)+(b*7.5))/11

console.log('MEDIA = ' + media.toFixed(5));