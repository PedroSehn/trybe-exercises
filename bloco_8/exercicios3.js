const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const corretor = (gabarito,respotstas) =>{
  let nota = 0;
  let naquestions = 0;
  
  for(let i = 0; i < gabarito.length ; i+=1){
    if(respotstas[i] === 'N.A'){
      nota = nota;
    }else if(gabarito[i] === respotstas[i]){
      nota = nota + 1;
    }else{
      nota = nota - 0.5;
    }
    
    
  }
    console.log(nota);
}

corretor(rightAnswers, studentAnswers);
