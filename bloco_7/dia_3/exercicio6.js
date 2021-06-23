const assert = require('assert');
// escreva a função addOne aqui

const addOne = (myArray) =>{
  let newArray = [];
  
  for(let i in myArray){
    newArray.push(myArray[i]);
    newArray[i]++;
  }
  return newArray;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function', '1');
assert.deepStrictEqual(output, expected, '2');
assert.deepStrictEqual(myArray, unchanged, '3');

addOne(myArray);