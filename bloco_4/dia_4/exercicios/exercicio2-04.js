let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let contador = ' ';
let biggest = ' ';

for(let i in nomes){
	contador = nomes[i];
	
	
	if(contador.length > biggest.length){
		biggest = contador
		contador = ' '
	}
	
}

console.log(biggest);

	



