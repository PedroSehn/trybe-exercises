let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma;
let divisao;

soma = numbers.reduce((total, currentElements) => total + currentElements);

divisao = soma / numbers.length;

if(divisao < 20){
	console.log("Maior que 20")
}else{
	console.log('Menor que 20')
}
