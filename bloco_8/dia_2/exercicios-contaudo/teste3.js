const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];
const teste = (letra, nomes) => nomes.some((name) => name[0] === letra);


console.log(teste('W', names))