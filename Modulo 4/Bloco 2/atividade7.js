const notas = [7.5, 8.0, 6.5, 9.0, 5.5, 8.5, 7.0];

let i = 0;
let soma = 0;

while (i < notas.length) {
  soma += notas[i];
  i++;
}

const media = soma / notas.length;

console.log("Soma:", soma);
console.log("Média:", media);