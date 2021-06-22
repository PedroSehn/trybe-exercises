const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}


assert.deepEqual(myFizzBuzz(15), 'fizzbuzz', 'retorno esperado: fizzbuzz');
assert.deepEqual(myFizzBuzz(3), 'fizz', 'retorno esperado: fizz');
assert.deepEqual(myFizzBuzz(5), 'buzz', 'retorno esperado: buzz');
assert.deepEqual(myFizzBuzz(1), 1);

assert.deepEqual(myFizzBuzz('a'), false);