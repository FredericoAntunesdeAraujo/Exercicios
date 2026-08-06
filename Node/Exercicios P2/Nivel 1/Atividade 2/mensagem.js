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
function autorSistema(nome){
    const nomeString = String(nome); 
    console.log(`O ${nomeString} é o fundador do sistema!`);
    return;
}

module.exports = {
    boasVindas,
    despedidas,
    autorSistema
}