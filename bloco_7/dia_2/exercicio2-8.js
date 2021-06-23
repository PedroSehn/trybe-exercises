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


const exist = (obj, key, value)=>{
  let object = Object.entries(obj);
  let exists = false;
  
  for(i in object){
   object[i][0] == key && object[i][1] == value ? exists = true : exist;
  }

  return console.log(exists);
}

exist(lesson3, 'materia', 'Matemática');