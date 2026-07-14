// - Altere o texto do `h1` para `"JavaScript no DOM!"`
// - Altere o subtítulo para seu próprio nome
// - Use `innerHTML` na `div` para exibir `"<strong>Conteúdo alterado</strong>"`
// - `textContent` para texto puro, `innerHTML` quando precisar inserir tags HTML


const textoNovo = document.querySelector('#titulo');
const novoSubtitulo = document.querySelector('#subtitulo');
const novoConteudo = document.querySelector('div');

textoNovo.textContent = "JavaScript no DOM!";
novoSubtitulo.textContent = "Frederico";
novoConteudo.innerHTML = `<strong>Conteúdo alterado</strong>`
