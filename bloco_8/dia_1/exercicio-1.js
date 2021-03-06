const newEmployees = (generator) => {
  const employees = {
    id1: generator('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generator('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generator('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return console.log(employees);
};

generator = (fullname) => {
 let email = fullname.toLowerCase().split(' ').join('_'); 
 return {fullname, email: `${email}@trybe.com`};
  
}

console.log(newEmployees(generator));



 