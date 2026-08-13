import chalk from 'chalk';
import prompt from 'prompt-sync';


const promptE = prompt();

console.log(chalk.bgBlue("===== Construtor de personagem ====="));
const nomeP = promptE('Qual é o nome do seu personagem? ');
const classeP = promptE('Qual é a classe do seu personagem? ');
const nivelP = Number(promptE('Qual é o nivel do seu personagem? '));

const hp = nivelP * 10;
function rank(nivelP){

    if ( nivelP <= 10 && nivelP >= 0){
        return "Recruta";
    } else if (nivelP <= 20){
        return "Veterano";
    } else if (nivelP >= 21){
        return "Lendário";
    } else {
        return "Você precisa melhorar";
    }
};

const rankP = rank(nivelP);

console.log(chalk.bgBlue("===== Perfil Usuário ====="));
console.log(chalk.bgRed(`===== Nome : ${nomeP} =====`));
console.log(chalk.bgRed(`===== Classe : ${classeP} =====`));
console.log(chalk.bgRed(`===== Nível : ${nivelP} =====`));
console.log(chalk.bgRed(`===== HP : ${hp} =====`));
console.log(chalk.bgRed(`===== Rank : ${rankP} =====`));
