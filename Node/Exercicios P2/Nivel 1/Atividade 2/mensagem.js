function boasVindas(nome){
    const nomeString = String(nome); 
    console.log(`Seja bem-vindo ${nomeString}!`);
    return;
}
function despedidas(nome){
    const nomeString = String(nome); 
    console.log(`Até mais ${nomeString}!`);
    return;
}
const autorSistema = "Frederico";

module.exports = {
    boasVindas,
    despedidas,
    autorSistema
}