// Transformar as funções do exercício 1, para Arrow Functions
const saudacao = (nome) => {
    console.log(`Olá, ${nome}! Bem-vindo ao sistema. `)
    return saudacao;
}

const ehPositivo = (numero) =>{
    if(numero > 0){
        console.log("É positivo fi");
        return true;
    } else{
        console.log("Não é positivo fio, esse número ai é negativo");
        return false;
    }
    return;
}

const calcularArea = (altura, largura) => {
    const areaRetangulo = altura * largura;
    return areaRetangulo;
}


console.log(saudacao("Rogério"));
console.log(ehPositivo(1));
console.log(calcularArea(10,2));
