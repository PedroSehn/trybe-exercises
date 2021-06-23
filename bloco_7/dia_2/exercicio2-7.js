const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const getKey = (x, key)=>{
  let objArray = Object.values(x);
  let resultado = '';
 
  for(i in objArray){
    
    i == key ? resultado = objArray[i] : objArray[i];
  }
  return console.log(resultado);

 }
 getKey(lesson3, 0);