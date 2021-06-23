const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const concatena =(x)=>{
  let skills= Object.keys(x);  
  for(let i in skills){
    console.log(`${skills[i]} => ${student1[skills[i]]}`)
  }
}

concatena(student1);