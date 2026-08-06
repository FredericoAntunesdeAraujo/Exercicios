const usuarios = require("./usuarios");

usuarios.criarUsuario("Roberto", 12);
usuarios.criarUsuario("Carlos", 22);
usuarios.criarUsuario("Uberdam", 32);
console.log(usuarios.listarUsuario());