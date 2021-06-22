const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
const arrTest = [1, 2, 3, 4]
const myRemoveTest = myRemove(arrTest, 3);
const myRemoveTest2 = myRemove(arrTest, 5);

assert.deepEqual(myRemoveTest, [1,2,4]);

assert.notDeepEqual(myRemoveTest,[1, 2, 3, 4])

assert.deepEqual(arrTest,[1, 2, 3, 4] );

assert.deepEqual(myRemoveTest2,[1, 2, 3, 4]);