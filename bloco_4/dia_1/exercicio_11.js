let salario = 3000;
let inss;
let salarioLiquido;
let slarioBase ;
let imopstoRenda;

if(salario <= 1556.94){
	inss = salario * 0.08;
	salarioBase = salario - inss;
}else if(salario >= 1556.95 && salario <= 2594.92){
	inss =(salario * 0.09);
	salarioBase = salario - inss;
}else if(salario >= 2594.93 && salario <= 5189.82){
	inss =(salario * 0.11);
	salarioBase = salario - inss;
}else if (salario > 5189.82){
	inss = 570.88;
	salarioBase = salario - inss;
}

if(salarioBase <= 1903.98){
	imopstoRenda = 0;
}else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
	imopstoRenda = salarioBase * 0.075 - 142.80;
}else if(sasalarioBaselario >= 2826.66 && salarioBase <= 3751.05){
	imopstoRenda = salarioBase * 0.15 - 354.80;
}else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
	imopstoRenda = salarioBase * 0.225 - 636.13;
}else{
	impostoRenda - sasalarioBaselario *0.275 - 869.36;
}


console.log('Salario bruto = ' + salario);
console.log('INSS = ' + inss);
console.log('Imposto renda = ' + imopstoRenda);
console.log('Salario base = ' + salarioBase);
console.log('Salario Liquido = ' + (salarioBase - imopstoRenda));