const arquivo = require('./arquivo');

arquivo.criarArquivo('log.txt', "Jorge");
console.log(arquivo.lerArquivo('log.txt'));