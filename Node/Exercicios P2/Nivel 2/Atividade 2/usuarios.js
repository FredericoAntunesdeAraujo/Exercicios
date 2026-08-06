let usuarios = [];

let usuario = {
    nome : "",
    idade : 0
}

function criarUsuario(nome,idade){
    usuario.nome = String(nome);    
    usuario.idade = Number(idade);
    
    usuarios.push(usuario);
};

function listarUsuario(){
    console.log(usuarios);
}

module.exports = {
    criarUsuario,
    listarUsuario
}