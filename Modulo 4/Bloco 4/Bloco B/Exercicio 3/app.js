const container = document.getElementById("container");
const titulo = container.firstElementChild;
console.log(titulo.textContent);

const descricao = titulo.nextElementSibling;
console.log(descricao.textContent);

const tag = descricao.nextElementSibling;
console.log(tag.textContent);

const containerNovamente = tag.parentElement;
console.log(containerNovamente.textContent);