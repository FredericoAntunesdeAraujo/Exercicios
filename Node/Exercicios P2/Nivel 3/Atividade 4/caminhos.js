const path = require('path');

function montarCaminho(nomeArquivo) {
    return path.join(__dirname, 'Atividade 4', nomeArquivo);
}




module.exports = {
    montarCaminho
}