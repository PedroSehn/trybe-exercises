const assert = require('assert');

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
teste = (array) =>{
  let filteredPeople = [];
  array.forEach((atual, idenx)=>{
    const {nationality,bornIn} = atual;
    
    if(nationality === 'Australian' && bornIn >= 1901 && bornIn < 2001){
      filteredPeople.push(atual);
    }
  })
  return filteredPeople;
} 
const filteredPeople = teste(people);
console.log(filteredPeople);

assert.deepStrictEqual(
  filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' },
);
assert.deepStrictEqual(
  filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' },
);