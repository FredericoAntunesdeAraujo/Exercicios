const validacoes = require("./validacoes");

function somar(a,b) {

    if (validacoes.validarNumero(a) == true) {
        return a + b;
        
    } else {
        console.log("O espaço 'a' precisa conter um número.")
    }

}
function subtrair(a,b) {
    if (validacoes.validarNumero(a) == true) {
        return a - b;
        
    } else {
        console.log("O espaço 'a' precisa conter um número.")
    }
}
function dividir(a,b) {
    if (validacoes.validarNumero(a) == true) {
        return a / b;
        
    } else {
        console.log("O espaço 'a' precisa conter um número.")
    }
}
function multiplicar(a,b) {
    if (validacoes.validarNumero(a) == true) {
        return a * b;
        
    } else {
        console.log("O espaço 'a' precisa conter um número.")
    }
}

module.exports = {
    somar,
    subtrair,
    dividir,
    multiplicar
}