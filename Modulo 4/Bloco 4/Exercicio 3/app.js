// - Adicione a classe `destaque` na `#caixa`
// - Adicione a classe `oculto` no `#alerta`
// - Adicione a classe `erro` no `#card`
// - Verifique com `classList.contains` 
//  se cada classe foi aplicada e imprima o resultado no console

const caixaDestaque = document.querySelector('#caixa');
const alertaOculto = document.querySelector('#alerta');
const cardErro = document.querySelector('#card');

caixaDestaque.classList.add('destaque');
alertaOculto.classList.add('oculto');
cardErro.classList.add('erro');

console.log(caixaDestaque.classList.contains('destaque'));
console.log(alertaOculto.classList.contains('oculto'));
console.log(cardErro.classList.contains('erro'));
