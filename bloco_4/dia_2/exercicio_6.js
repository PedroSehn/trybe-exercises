let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
evenNumbers=0;


for(i= 0; i < numbers.length; i++){
	
	if(numbers[i]% 2 !==0){
		evenNumbers++
	}else{
		evenNumbers
	}

}

if(evenNumbers == 0){
	console.log('Nao tem numeros impares')
}else{
	console.log(evenNumbers)
}

