let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// fonte http://devfuria.com.br/logica-de-programacao/vetor-maior-menor-indice/

iMaior= 0;
iMenor = 0;
for(i= 0; i < numbers.length; i++){
	if(numbers[i] > iMaior){
		iMaior = numbers[i];
	}

	if(numbers[i] < iMaior){
		iMenor = numbers[i];

	}
}


console.log(iMaior)