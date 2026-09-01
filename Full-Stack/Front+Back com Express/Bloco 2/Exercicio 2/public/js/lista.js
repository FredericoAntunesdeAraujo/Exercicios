const selectAura = document.getElementById('selectAura');
const containerCards = document.getElementById('containerCards');


let cardapioInteiro = [];

inicializar();

async function inicializar() {
    await cardapioComidas();
    await categorias();
}

async function cardapioComidas() {
    try {
        const resposta    = await fetch('/api/pratos');
        const comidas = await resposta.json();

        cardapioInteiro = comidas

        cardapioInteiro.forEach(p => {
        const card = document.createElement('div');

        let status = p.disponivel ? "Disponível" : "Indisponível";     
        let classeStatus = p.disponivel ? "disponivel" : "indisponivel";     

            card.innerHTML = `
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>
            <p>${p.categoria}</p>
            <p>R$ ${parseFloat(p.preco).toFixed(2)}</p>
            <span class="${classeStatus}">${status}</span>
            <br><br>
            <button class="btn-remover">Remover</button>
        `;
            const botaoRemover = card.querySelector('.btn-remover');

            botaoRemover.addEventListener('click', async () => {
            const id = p.id;
            const resposta = await fetch(`/api/pratos/${id}`, {method: 'DELETE'});
            console.log(resposta.ok);

                if (resposta.ok){
                    card.remove();
                }


            });

        containerCards.appendChild(card);
        });




    } catch (erro) {
        console.error('Erro ao carregar as comidas:', erro);
    }
}

async function categorias() {
    try {
        const resposta    = await fetch('/api/categorias');
        const categorias = await resposta.json();

        categorias.forEach(c => {
            
        const option       = document.createElement('option');
            option.value       = c.nome;
            option.textContent = c.nome;
            selectAura.appendChild(option);
        });

        selectAura.addEventListener('change', async () => {
            const categoriaEscolhida = selectAura.value;
        
            const resposta = await fetch(`/api/pratos?categoria=${categoriaEscolhida}`);
            const pratosFiltrados = await resposta.json();
            console.log(pratosFiltrados);
            containerCards.innerHTML = "";

            pratosFiltrados.forEach(p => {
            const card = document.createElement('div');

            let status = p.disponivel ? "Disponível" : "Indisponível";
            let classeStatus = p.disponivel ? "disponivel" : "indisponivel";


            card.innerHTML = `
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>
            <p>${p.categoria}</p>
            <p>R$ ${parseFloat(p.preco).toFixed(2)}</p>
            <span class="${classeStatus}">${status}</span>
            <br><br>
            <button class="btn-remover">Remover</button>
        `;

            const botaoRemover = card.querySelector('.btn-remover');

            botaoRemover.addEventListener('click', async () => {
            const id = p.id;
            const resposta = await fetch(`/api/pratos/${id}`, {method: 'DELETE'});
            console.log(resposta.ok);

                if (resposta.ok){
                    card.remove();
                }


            });



        containerCards.appendChild(card);





            });

        });



    } catch (erro) {
        console.error('Erro ao carregar as categorias:', erro);
    }
}