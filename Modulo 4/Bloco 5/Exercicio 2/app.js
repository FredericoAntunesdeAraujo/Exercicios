const valorNovo = document.querySelector('#valor');
const botaoAdd = document.querySelector('#btn-inc');
const botaoRem = document.querySelector('#btn-dec');

botaoRem.disabled = true;
botaoRem.addEventListener('click', ()=> {

    valorNovo.textContent = Number(valorNovo.textContent) - 1;

    if (valorNovo.textContent === "0"){
        botaoRem.disabled = true;
    } else {
        botaoRem.disabled = false;
    }

});

botaoAdd.addEventListener('click', ()=> {

    valorNovo.textContent = Number(valorNovo.textContent) + 1;
    botaoRem.disabled = false;

});