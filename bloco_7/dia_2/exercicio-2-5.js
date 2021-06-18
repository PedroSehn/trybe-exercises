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

const allClasses= Object.assign({}, {lesson1, lesson2,lesson3});
console.log(allClasses);

const numeroEstudantes = (x,y,z)=>{
  console.log(x+y+z);
}
numeroEstudantes(lesson1.numeroEstudantes, lesson2.numeroEstudantes, lesson3.numeroEstudantes);




