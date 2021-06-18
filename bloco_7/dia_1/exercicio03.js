const frase ="Antônio foi no banheiro e não sabemos o que aconteceu";
let fraseCortada = frase.split(' ');


const resultado = (x) =>{
  
  let biggest= 0;
  let biggestWord ='';

  for(let i = 0; i < x.length; i++){
    

    if(x[i].length > biggest){
      biggestWord = x[i];
      biggest = x[i].length;
    }
  }

  return console.log(biggestWord);
}




resultado(fraseCortada);