const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.strictEqual(obj1.title, obj2.title);
assert.strictEqual(obj1.description, obj2.description);

assert.strictEqual(obj1.title, obj3.title, `O conteudo é diferente, conteudo esperado = ${obj1.title}, Conteudo Recebido = ${obj3.title}`);