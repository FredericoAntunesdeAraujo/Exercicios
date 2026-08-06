function validarNome(nome){
    const nomeString = String(nome);

    if ( nome === "   "){
        console.log("O nome não pode ter menos de 3 caracteres")
    } else {
        console.log(`O nome " ${nomeString} " é válido. `)
    }
}

function validarIdade(idade){
    const idadeNumber = Number(idade);

    if (idadeNumber <= 0 ){
        console.log("A idade deve ser maior do que 0!");
    } else{
        console.log(`A idade "${idade}" é válida para uso! `)
    }
}

module.exports = {
    validarNome,
    validarIdade
}