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

let estadoOptions = document.createElement('option');

function appendEstados(){
	for(let i =0; i < siglas.length; i++){
		
		document.getElementById('estado').appendChild(document.createElement('option'));
		document.getElementById('estado').children[i].value = siglas[i];
		document.getElementById('estado').children[i].innerHTML = siglas[i];
		
	}
}

appendEstados();

//document.createElement('option').innerText = document.createElement('option').value;