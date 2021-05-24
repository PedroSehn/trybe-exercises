let palavra = 'arara'


function palindromo(x){
	pal1 = [];
	pal2= [];
	
	
	for(let i = 0; i < x.length; i++){
		pal1.push(x[i])
		
	}


	pal2=pal1.reverse();
	
	let palindromo1= pal1.join()
	let palindromo = pal2.join();
	
	console.log(palindromo);

	if(palindromo===palindromo1){
		console.log('palindromo')
	}else{
		console.log('nao palindromo')
	}


}



palindromo(palavra)