const caixa = document.querySelector('#caixa');
const botoes = document.querySelectorAll('button');

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        const cor = botao.dataset.cor;
        caixa.style.backgroundColor = cor;
    });
});