const fs = require('fs')

function registrarLog(mensagem) {
    let agora = new Date();

    console.log(`${agora.getDate()} : ${agora.getHours()} - ${mensagem}`);
    fs.appendFileSync('logs.txt', `${agora.getDate()} : ${agora.getHours()} - ${mensagem} \n`);
}

module.exports = {
    registrarLog
}