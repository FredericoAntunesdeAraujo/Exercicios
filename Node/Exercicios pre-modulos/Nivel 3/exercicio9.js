let nomeItem = process.argv[2];
let preco = Number(process.argv[3]);
let ouro = Number(process.argv[4]);

let faltante = preco - ouro;


if ( ouro >= preco) {
    console.log(`Você comprou o item ${nomeItem} com sucesso.`)
} else {
    console.log(`Lhe falta ${faltante} moedas de ouro.`)
}