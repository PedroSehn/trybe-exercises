
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let counter = 0;
  names.reduce((acumulator, atual)=>{
    for(let i in atual){
     atual[i].toLowerCase() === 'a' ? counter++ : counter;
    }
  }, '')
  return counter;
}

assert.deepStrictEqual(containsA(), 20);