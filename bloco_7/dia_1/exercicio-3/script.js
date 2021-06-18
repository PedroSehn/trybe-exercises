let corpo = document.getElementsByTagName('body')[0];
corpo.appendChild(document.createElement('button'));
let button = document.getElementsByTagName('button')[0];
button.value = 0;
button.innerHTML = button.value;





button.addEventListener('click', buttonFill = () =>{
  button.value = parseInt(button.value)+1;
  button.innerHTML = button.value;
});