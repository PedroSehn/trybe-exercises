const randomNumber = () => {
   let numero = Math.floor(Math.random() * 5) +1;
   return numero;
  }



  const sorteio = (randomNumber, aposta) => {
    res = randomNumber();
    aposta === res  ? console.log('Parabéns você ganhou') : console.log('Perdeu');
    
  }

  sorteio(randomNumber, 2);