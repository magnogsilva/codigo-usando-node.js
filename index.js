var readlineSync = require('readline-sync');
var n1 = readlineSync.question('informe a primeira nota: ');
var n2 = readlineSync.question('informe a segunda nota: ');
var n3 = readlineSync.question('informe a terceira nota: ');
var media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3))/3;
var resultado = media >= 7 ? 'APROVADO!' : 'REPROVADO!'        
console.log('A média foi '  +  media.toFixed(2)  +  ', e a situação do aluno é ' + resultado);
