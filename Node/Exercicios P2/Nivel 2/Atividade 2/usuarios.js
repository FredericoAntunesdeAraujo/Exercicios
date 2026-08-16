let usuarios = [];

function criarUsuario(nome, idade) {
    let usuario = {
        nome: String(nome),
        idade: Number(idade)
    };

    usuarios.push(usuario);
}

function listarUsuario() {
    console.log(usuarios);
}

module.exports = {
    criarUsuario,
    listarUsuario
};