const contar = document.querySelector('#contagem');
const previsao = document.querySelector('#preview')
const campoInput = document.querySelector('#campo');

campoInput.addEventListener('input', () => {

    const texto = campoInput.value;

    contar.textContent = texto.length + " caracteres";
    preview.textContent = texto;
});