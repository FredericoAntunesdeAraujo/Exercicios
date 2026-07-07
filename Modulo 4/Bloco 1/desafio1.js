let nome = "Jopacaco";
let classe = "Assasino";
let nivel = 1;
let vida = 100;
let vivoMorto ;
let arma = "Batata afiada";


if ( vida > 0) {
    vivoMorto = true;
} else{
    vivoMorto = false;
}

console.log(`${nome} é um(a) ${classe} nível ${nivel} com ${vida} pontos de HP. Arma : ${arma}. Status de vivo ou morto : ${vivoMorto}`)
