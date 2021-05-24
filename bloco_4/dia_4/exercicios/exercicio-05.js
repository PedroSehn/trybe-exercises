let info = {
	personagem: 'Margarida',
	origem: 'Pato Donald',
	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
	recorrente: 'sim'
  };


  let tioPatinhas = {
	personagem: 'Tio Patinhas',
	origem: 'Christmas on Bear Mountain, Dell Four Color Comics #178',
	nota: 'O último MacPatinhas',
	recorrente: 'sim'
  };


  for(let i in info, tioPatinhas){
	  console.log(info[i]+ " e " + tioPatinhas[i])
	  
  }