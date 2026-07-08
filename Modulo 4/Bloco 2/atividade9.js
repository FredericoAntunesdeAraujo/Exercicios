const temperaturas = [23, 17, 31, 8, 25, 14, 29, 11];

let maior = temperaturas[0];
let menor = temperaturas[0];

let i = 1;

while (i < temperaturas.length) {
  if (temperaturas[i] > maior) {
    maior = temperaturas[i];
  }

  if (temperaturas[i] < menor) {
    menor = temperaturas[i];
  }

  i++;
}

console.log("Maior temperatura:", maior);
console.log("Menor temperatura:", menor);