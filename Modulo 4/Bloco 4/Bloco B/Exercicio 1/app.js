const elementosLista = document.querySelectorAll("li");

elementosLista.forEach(function(item, indice) {
  console.log(`[${indice + 1}]: ${item.textContent}`);
});

elementosLista[2].classList.add("destaque");