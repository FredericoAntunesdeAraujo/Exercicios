const formulario = document.getElementById("formCadastro");
const nomePrato = document.getElementById("nomePratoC");
const descricaoPrato = document.getElementById("descricaoPratoC");
const precoPrato = document.getElementById("precoPratoC");
const categoriaPrato = document.getElementById("categoriaPratoC");


inicializar();

async function inicializar(){
    await categorias();
    
}

async function categorias() {
    const resposta = await fetch("/api/categorias");
    const comidas = await resposta.json();
    console.log(comidas);

    comidas.forEach(c => {
        const option = document.createElement("option");
        option.value = c.id
        option.textContent = c.nome
        categoriaPrato.appendChild(option)
    });
}

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const nome = nomePrato.value;
    const descricao = descricaoPrato.value;
    const preco = parseFloat(precoPrato.value);
    const categoria = categoriaPrato.value;

    const dados = {
        nome : nome,
        descricao : descricao,
        preco : preco,
        categoria_id : categoria
};

    const resposta = await fetch("/api/pratos", { method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(dados)
});

    if (resposta.ok) {
        alert("Prato cadastrado com sucesso!");
        formulario.reset();
} else {
    alert("Não foi possível concluir o cadastro.");
}

});