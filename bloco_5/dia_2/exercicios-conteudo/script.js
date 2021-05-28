let divisora = document.createElement('div');
let uia = document.createElement('div');
let pai = document.getElementById('pai');
let filhof = document.getElementById('primeiroFilhoDoFilho');
let ondeTa = document.getElementById('elementoOndeVoceEsta');

uia.innerText = 'uia'
divisora.innerText= ' its alive';

filhof.appendChild(uia);


pai.appendChild(divisora);
ondeTa.appendChild(divisora);


console.log(divisora);

