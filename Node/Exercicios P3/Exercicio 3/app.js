import sillyname from 'sillyname';
import chalk from 'chalk';


const nome1 = sillyname();
const nome2 = sillyname();
const nome3 = sillyname();

console.log(`${chalk.red(nome1)}`);
console.log(`${chalk.green(nome2)}`);
console.log(`${chalk.blue(nome3)}`);