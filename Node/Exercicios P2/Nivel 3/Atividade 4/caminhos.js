const path = require('path');

function montarCaminho(nomeArquivo) {
    return path.join(__dirname, 'Atividade 4', nomeArquivo);
}

console.log("==========================");
console.log(montarCaminho("caminhos.js"));
console.log(montarCaminho("arquivo2.js"));
console.log(montarCaminho("arquivo3.js"));
console.log("==========================");
