let h1 = document.createElement('h1');
let corpo = document.getElementsByTagName('body')[0];

let div = document.createElement('div');

h1.innerText = 'Exercício 5.2 - JavaScript DOM'

//h1
corpo.appendChild(h1);
h1.className='title';
//main content born
corpo.appendChild(div);
corpo.getElementsByTagName('div')[0].className = 'main-content';
let main = corpo.getElementsByClassName('main-content')[0];

for(i= 0; i<3; i++){
	let createH3 = document.createElement('h3');
	main.appendChild(createH3);
	createH3.className='description';
	createH3.innerText = [i];
}

//center content
main.appendChild(document.createElement('div'));
let centerContent = main.getElementsByTagName('div')[0];
centerContent.className= 'center-content';
centerContent.appendChild(document.createElement('p'));
centerContent.firstChild.innerText= 'AVADA KE DAVRA';

//left-content
main.appendChild(document.createElement('div'));
let leftContent = main.getElementsByTagName('div')[1];
leftContent.className = 'left-content';

//img
leftContent.appendChild(document.createElement('img'));
let img= leftContent.firstChild;
img.src = 'https://picsum.photos/200';



//right-content
main.appendChild(document.createElement('div'));
let rightContent = main.getElementsByTagName('div')[2];
rightContent.className = 'right-content';

rightContent.style = 'margin-right: auto';

rightContent.appendChild(document.createElement('ul'));
let ul= rightContent.firstChild;

for(i = 0; i < 10;i++){
	let createLi = document.createElement('li');
	createLi.innerText = [i];
	ul.appendChild(createLi);
	
}

ul.removeChild(ul.children[9]);
ul.removeChild(ul.children[8]);

//remove child
main.removeChild(leftContent);


//mudando cor
centerContent.parentElement.style.backgroundColor='green';