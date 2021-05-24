let array = [2, 3, 6, 7, 10, 1];

function verificador(x){
	
	
	for(i =0;i < x.lenght; i++){
		let biggest = 0;
		if(x[i] > biggest){
			biggest = i;
			console.log(i);
		}


	}
	
	return console.log(biggest);
}


verificador(array)