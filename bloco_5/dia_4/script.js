let options = document.getElementById('options');
let cor = '';

let inputs = document.getElementsByClassName('inputer');



inputs[0].addEventListener('input', function(){
	localStorage.removeItem('color');
	localStorage.setItem('color', inputs[0].value);
	settings();
})

inputs[1].addEventListener('input', function(){
	localStorage.removeItem('textColor');
	localStorage.setItem('textColor', inputs[1].value);
	settings();
})

inputs[2].addEventListener('input', function(){
	localStorage.removeItem('fontSize');
	localStorage.setItem('fontSize', inputs[2].value);
	settings();
})

inputs[3].addEventListener('input', function(){
	localStorage.removeItem('lineHollow');
	localStorage.setItem('lineHollow', inputs[3].value);
	settings();
})

inputs[4].addEventListener('input', function(){
	localStorage.removeItem('fontFamily');
	localStorage.setItem('fontFamily', inputs[4].value);
	settings();
})


function settings(){
	
	//background
	document.getElementsByTagName('body')[0].style.backgroundColor = localStorage.getItem('color');
	
	//text
	document.getElementById('ugabuga').children[0].style.color = localStorage.getItem('textColor');
	document.getElementById('ugabuga').children[1].style.color = localStorage.getItem('textColor');
	
	//fontSize
	document.getElementById('ugabuga').children[0].style.fontSize = localStorage.getItem('fontSize');
	document.getElementById('ugabuga').children[1].style.fontSize = localStorage.getItem('fontSize');
	
	//lineHollow
	document.getElementById('ugabuga').children[0].style.lineHeight = localStorage.getItem('lineHollow');
	document.getElementById('ugabuga').children[1].style.lineHeight = localStorage.getItem('lineHollow');

	//fontFamily
	document.getElementById('ugabuga').children[0].style.fontFamily = localStorage.getItem('fontFamily');
	document.getElementById('ugabuga').children[1].style.fontFamily = localStorage.getItem('fontFamily');
}

window.onload =settings();

