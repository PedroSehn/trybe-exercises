const names = ['João', 'Irene', 'Fernando', 'Maria'];
const picaNomes = (nome) => nome.length === 5;

const findNameWithFiveLetters = (array) => {
  console.log(array.find(picaNomes));
}

findNameWithFiveLetters(names);
