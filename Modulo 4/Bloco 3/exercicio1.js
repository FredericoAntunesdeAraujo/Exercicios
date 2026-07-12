function saudacao(nome){
    console.log(`Olá, ${nome}! Bem-vindo ao sistema.`)
    return saudacao
};

function ehPositivo(numero){
    if (numero > 0 ){
        console.log("É positivo pia!");
        return true;
    } else {
        console.log("É negativo pia!");
        return false;
    }
    return;
};

const calcularArea = (altura, largura) => {
    const areaRetangulo = altura * largura;
    return areaRetangulo;
}

console.log(saudacao("Roberto Carlos"));
console.log(ehPositivo(1));
console.log(calcularArea(5, 5));