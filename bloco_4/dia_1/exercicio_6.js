let peca = 'PEAO';
let res = peca.toLowerCase();

switch(res){
	case 'peao':
		console.log('2 quadraros pra frente no primeiro mov');
		break;

	case 'rainha':
		console.log('qualquer direção, qualquer range');
		break;

	case 'rei':
		console.log('quadrados adjacentes');
		break;
	
	case 'bispo':
		console.log('diagonal, qualquer range');
		break;

	case 'torre':
		console.log('linhas retas');
		break;

	case 'cavalo':
		console.log('movimentos em  L');
		break;

	default:
		console.log('peça invalida');
		break;
		
}

