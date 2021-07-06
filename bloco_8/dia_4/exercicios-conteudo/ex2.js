const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evens = (acumulo, atual) => ((atual % 2 === 0) ? acumulo += atual : acumulo); 
 const par = numbers.reduce((evens));
 console.log(par);