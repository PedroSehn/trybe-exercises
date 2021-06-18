const numero = 4;

const fatorial = (x) => {
  let resultado = x;
  for(let i = 1; i < x; i++){
    resultado = resultado *i;
  }
  console.log(resultado);
 }

fatorial(numero);