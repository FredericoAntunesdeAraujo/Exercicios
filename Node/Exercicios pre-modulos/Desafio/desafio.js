let nome = process.argv[2];
let classe = process.argv[3];
let nivel = Number(process.argv[4]);

let rank = "";

if ( nivel <= 10){
    rank = "Recruta";
} else if ( nivel <= 20){
    rank = "Investigador"
} else if ( nivel >= 21) {
    rank = "Especialista";
} else {
    rank = "Betinha";
}

console.log("===== Cadastro de Agente =====");
console.log(`===== Nome : ${nome}`);
console.log(`===== Classe : ${classe}`);
console.log(`===== Nível : ${nivel}`);
console.log(`===== Rank: ${rank}`);
console.log("==============================");
