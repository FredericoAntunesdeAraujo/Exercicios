const clickBotao = document.querySelector("#btn");
const novaMensagem = document.querySelector("#mensagem");

clickBotao.addEventListener('click', ()=>{
    if (novaMensagem.textContent === "Botão clicado!") {
        novaMensagem.textContent = "Clique novamente!";
    } else {
        novaMensagem.textContent = "Botão clicado!";
    }
});