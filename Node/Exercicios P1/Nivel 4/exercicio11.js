let ataque = Number(process.argv[2]);
let defesa = Number(process.argv[3]);

dano = ataque - defesa;

if ( dano <= 0){
    console.log("Nenhum dano causado ao inimigo.");
} else {
    console.log(`O ataque inflingiu dano, agora o inimigo está com ${dano} de vida.`)
}