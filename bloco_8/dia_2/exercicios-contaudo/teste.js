const numbers = [19, 21, 30, 3, 45, 22, 15];
const verify = (number) => number % 3 === 0 && number % 5 === 0;
const findDivisibleBy3And5 = (array) => {
 console.log(array.find(verify));

}
findDivisibleBy3And5(numbers);
