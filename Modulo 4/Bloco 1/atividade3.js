const produto = "Notebook";
const preco = 3500;
const quantidade = 2;

const mensagem = "O produto " + produto + " custa R$ " + preco +
  " e você comprou " + quantidade + " unidades. Total: R$ " + (preco * quantidade) + ".";

console.log(mensagem);