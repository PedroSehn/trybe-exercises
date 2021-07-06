const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

const teste = () => rectangles.forEach((atual)=>{
 return rectangleArea(...atual);
})

teste();

console.log(
rectangleArea(...rectangle1),
rectangleArea(...rectangle2),
rectangleArea(...rectangle3),
)