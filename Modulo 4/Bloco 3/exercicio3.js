const produto = {
    nome : "Jorge",
    preco : 999,
    categoria : "Ser vivo",
    emEstoque : true
};

console.log(produto.nome, produto.preco, produto.categoria, produto.emEstoque);
produto.preco = 250;

produto.desconto = 0.1;

const precoFinal = produto.preco - (produto.preco * produto.desconto);

console.log(`O preço final do ${produto.nome}, é R$ ${precoFinal}.`);