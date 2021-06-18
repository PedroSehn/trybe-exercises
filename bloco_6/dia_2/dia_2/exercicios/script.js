
let siglas = [
	'AC',
	'AL',
	'AP',
	'AM',
	'BA',
	'CE',
	'DF',
	'ES',
	'GO',
	'MA',
	'MS',
	'MT',
	'MG',
	'PA',
	'PB',
	'PR',
	'PE',
	'PI',
	'RJ',
	'RN',
	'RS',
	'RO',
	'RR',
	'SC',
	'SP',
	'SE',
	'TO',
]

let resultado =[];

let info = document.getElementsByClassName('importantInput');

let prevent = document.getElementById('submit');

let estadoOptions = document.createElement('option');

function appendEstados(){
	for(let i =0; i < siglas.length; i++){
		
		document.getElementById('estado').appendChild(document.createElement('option'));
		document.getElementById('estado').children[i].value = siglas[i];
		document.getElementById('estado').children[i].innerHTML = siglas[i];
		
	}
}
appendEstados();




function getInfo(){
		
	for(i = 0; i < 12; i++){
		let nome = info[i].name;
		let valor = info[i].value;
		resultado.push(nome + ' = ' + valor);
	}
	return console.log(resultado);
}

prevent.addEventListener('click', getInfo);


function returnInfo(){
	for (let i in resultado) {
		
		document.getElementById('return').appendChild(document.createElement('li'))
		document.getElementById('return').children[i].innerText = resultado[i];
		
	}
}
prevent.addEventListener('click', returnInfo);
//document.createElement('option').innerText = document.createElement('option').value;

