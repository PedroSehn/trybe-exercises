let valor = 100;
let custo = 90;
let imposto = custo*0.20;
let lucro = (custo + imposto) - valor;

if(valor < 0 || custo < 0|| imposto < 0){
	console.log('tem valor negativo')
}else{
	console.log('Voce terá ' + lucro + ' de lucro ')
	console.log(imposto);
}