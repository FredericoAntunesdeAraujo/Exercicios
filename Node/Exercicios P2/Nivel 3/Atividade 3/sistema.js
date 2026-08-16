const os = require('os');

function mostrarInfoSistema() {
    console.log(`O sistema operacional do usuário é : ${os.platform()}`);
    console.log(`A memória total é: ${os.totalmem() / 1024 / 1024 / 1024} GB`);
    console.log(`A memória livre é: ${os.freemem() / 1024 / 1024 / 1024} GB`);
    console.log(`A arquitetura do processador é: ${os.arch()} `);

};

module.exports = {
    mostrarInfoSistema
}