let days = document.getElementById('days');
let dias = days.children; 
//
let buttonsCont = document.getElementsByClassName('buttons-container')[0];

function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
	const weekDaysList = document.querySelector('.week-days');
	
	
	for (let index = 0; index < weekDays.length; index += 1) {
	  const days = weekDays[index];
	  const dayListItem = document.createElement('li');
	  dayListItem.innerHTML = days;
  
	  weekDaysList.appendChild(dayListItem);
	};
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
 //funcoes do calendario
	const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];	
	
 //add os numeros e dá classe day
  for(let i in dezDaysList){  
	let li = document.createElement('li');
	days.appendChild(li);
	dias[i].innerHTML= dezDaysList[i];
	dias[i].className = 'day';
  }


  //distribui classes
  for(let i in days.children){
	  if(dias[i].innerHTML == 24 || dias[i].innerHTML == 25 || dias[i].innerHTML == 31){
		  dias[i].classList.add('holiday');
	  }
	  
	  if(dias[i].innerHTML == 4 || dias[i].innerHTML == 11 || dias[i].innerHTML == 18 || dias[i].innerHTML == 25){
		dias[i].classList.add('friday');
	  }
	  
  }


//Criação do botão feriados


let feriados = buttonsCont.appendChild(document.createElement('BUTTON'));
feriados.innerText = 'FERIADOS';
feriados.className = 'btn-holiday';
let cont = 0;
function holidayVerifier(){
	
	if(cont %2 <= 0){
		
		for(i = 0; i < dias.length; i++){
			if(dias[i].classList.contains('holiday')){
				dias[i].style.backgroundColor = 'red';
				cont++;
			}
			
		}	

	}else if(cont % 2 != 0){
		for(i = 0; i < dias.length; i++){
			if(dias[i].classList.contains('holiday')){
				dias[i].style.backgroundColor = '#eee';
				cont++;
				
			}
			
		}
	}
	
	console.log(cont);
	
}


feriados.addEventListener('click', holidayVerifier);

//botão sextafeira

let sexta = buttonsCont.appendChild(document.createElement('button'));
sexta.innerText = 'SEXTA';
sexta.id = 'btn-friday';
let counter = 0;
function fridayVerifier(){
	
	if(counter %2 <= 0){
		
		for(i = 0; i < dias.length; i++){
			if(dias[i].classList.contains('friday')){
				dias[i].style.backgroundColor = 'green';
				counter++;
			}
			
		}

	}else if(counter %2 != 0){
		for(i = 0; i < dias.length; i++){
			if(dias[i].classList.contains('friday')){
				dias[i].style.backgroundColor = '#eee';
				counter++;
			}
			
		}
	}
		
	counter = counter-3;
	
}

sexta.addEventListener('click', fridayVerifier);




  
  