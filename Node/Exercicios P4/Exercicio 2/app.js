import pg from 'pg';
import promptSync from 'prompt-sync';

const { Client } = pg;
const prompt = promptSync();

function criarCliente() {
    return new Client({
        host:     'localhost',
        port:     5432,
        user:     'postgres',
        password: 'root',
        database: 'escola_db'
    });
};


async function MostrarAluno() {
    const client = criarCliente();
    try {
        await client.connect();
        const resultado = await client.query(
            'SELECT * FROM alunos WHERE presente = FALSE'
        );
        console.log("Nenhum aluno presente");

    } catch(erro) {
        console.log('❌ Erro ao listar itens:', erro.message);
    } finally {
        await client.end();
    }
}
// MostrarAluno();

async function MostrarJogo() {
    const client = criarCliente();
    try{
        console.log("Digite um genero de jogo: ");
        const generoJogo = prompt('Genero: ');


        const resultado = await client.query(
            'SELECT * FROM jogos WHERE genero = $1'
        )
        console.log(generoJogo.rows)

    } catch(erro){
        console.log('❌ Erro ao listar itens:', erro.message);
    } finally{
        await client.end();
    }
}

MostrarJogo();