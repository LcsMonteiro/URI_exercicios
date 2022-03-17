var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var diasInput = parseInt(input);

var diasAno = 365;
var mes = 30;
    
var ano = parseInt(diasInput/diasAno);

var restoAno = diasInput%diasAno;

var meses = parseInt(restoAno/mes);

var dias = parseInt(restoAno%mes);

var resultado =`${ano} ano(s)
${meses} mes(es)
${dias} dia(s)`;

console.log(resultado);