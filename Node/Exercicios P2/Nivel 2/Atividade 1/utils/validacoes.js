function validarNumero(soma){
    const somaNumber = Number(soma)
    if (somaNumber == " "){
        console.log("A soma deve possuir números e não letras.")
    }
    else {
        console.log("Operação validada.")
        return true;
    };
};


module.exports = {
    validarNumero
}
