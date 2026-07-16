// - Remova o `#item-2` da lista usando `.remove()`
// - Crie um novo `<li>` com o texto `"Item inserido via JS"` e insira-o **antes** do `#item-3` usando `.insertBefore`
// - Substitua o `#item-1` por um novo `<li>` com o texto `"Item substituído"` usando `.replaceChild`
// - Imprima o `innerHTML` da lista inteira no console para confirmar o resultado final

const nomeLista = document.querySelector("#lista");
const item1 = document.querySelector("#item-1");
const item2 = document.querySelector("#item-2");
const item3 = document.querySelector("#item-3");

item2.remove();

const novoItem2 = document.createElement("li");
novoItem2.textContent = "Item inserido via JS";
nomeLista.insertBefore(novoItem2, item3);

const novoItem1 = document.createElement("li");
novoItem1.textContent = "Item substituído";
nomeLista.replaceChild(novoItem1, item1);

console.log(nomeLista.innerHTML);