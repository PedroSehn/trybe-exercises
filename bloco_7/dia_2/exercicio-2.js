

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


const modfier=(objeto, chave, valor) =>{
  objeto[chave] = valor;
  console.log(objeto);
}


modfier(lesson2, 'turno' ,'manha' );


const keyList = (obj) =>{
  console.log(Object.keys(obj));
}

keyList(lesson2);

const objSize = (obj)=>{
  
  console.log(Object.keys(obj).length);
}

objSize(lesson2);


const objValues = (obj) =>{
  console.log(Object.values(obj));
}

objValues(lesson2);

