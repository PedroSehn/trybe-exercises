let  frase = 'Tryber x aqui!';
let parametro = 'Pedro';
const skills = [1,2,3,4,5];
let res = '';

const cataPalavra = (frase) =>{
  let fraseCortada = frase.split(' ');
  for(let i =0; i<fraseCortada.length; i++){
    fraseCortada[i] === 'x' ? fraseCortada[i] = parametro : fraseCortada[i];
  }
  return res = fraseCortada.join(' ');
}

const lero = (parametro) =>{
  console.log(`${parametro} Minhas cinco principais habilidades são:
  ${skills[0]}
  ${skills[1]}
  ${skills[2]}
  ${skills[3]}
  ${skills[4]}`)
}

cataPalavra(frase);
lero(res);