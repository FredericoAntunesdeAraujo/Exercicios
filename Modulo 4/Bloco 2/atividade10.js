const notas = [8.5, 4.0, 7.0, 5.5, 9.5, 6.0, 3.0, 7.5];

let aprovados = [];
let reprovados = [];

for (let i = 0; i < notas.length; i++) {
  if (notas[i] >= 7) {
    aprovados.push(notas[i]);
  } else {
    reprovados.push(notas[i]);
  }
}

console.log("Aprovados:", aprovados);
console.log("Reprovados:", reprovados);

console.log("Quantidade de aprovados:", aprovados.length);
console.log("Quantidade de reprovados:", reprovados.length);