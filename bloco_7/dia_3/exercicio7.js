const assert = require('assert');
// escreva a função wordLengths aqui

const words = ['sun', 'potato', 'roundabout', 'pizza'];

const wordLengths = (x) =>{
  let newArray =[];
  
  for(let i in x){
    newArray.push(x[i].length);
  }
  return newArray;
}


const expected = [3, 6, 10, 5];
assert.strictEqual(typeof wordLengths, 'function'); //check
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

