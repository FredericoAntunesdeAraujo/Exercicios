// - Use `.value` para ler o conteúdo de cada input
// - A idade lida do input chega como **string** — converta para número com `Number()` antes de usar em cálculos
// - Imprima: `"Nome: Maria | Idade: 22 | Curso: Desenvolvimento Web"`

const nomeM = document.querySelector('#nome');
const idadeM = document.querySelector('#idade');
const cursoM = document.querySelector('#curso');

console.log(nomeM.value);


console.log(Number(idadeM.value));
console.log(typeof Number(idadeM.value));

console.log(cursoM.value);

