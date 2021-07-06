const numbers = [50, -30, 3, 15, 85, 50];

const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);
const bigger = numbers.reduce(getBigger, 100);
console.log(bigger); 