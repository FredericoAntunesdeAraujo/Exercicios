let celsius = Number(process.argv[2]);

let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;

console.log(`Agora está fazendo ${celsius} Graus em celsius.`)
console.log(`Agora está fazendo ${fahrenheit} Graus em Fahrenheit.`)
console.log(`Agora está fazendo ${kelvin} Graus em Kelvin.`)