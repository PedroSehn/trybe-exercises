const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const teste = (produtos, preco) =>{
  produtos.map(function(elemento,index){
  console.log({[elemento] : preco[index]});
  })
}

teste(products, prices);