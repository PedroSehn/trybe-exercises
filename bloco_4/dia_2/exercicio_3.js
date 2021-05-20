let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma;
let divisao;

soma = numbers.reduce((total, currentElements) => total + currentElements);

divisao = soma / numbers.length;

console.log(divisao);


