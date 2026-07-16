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
            'SELECT * FROM alunos ORDER BY nota DESC'
        );
        console.log(resultado.rows);

    } catch(erro) {
        console.log('❌ Erro ao listar itens:', erro.message);
    } finally {
        await client.end();
    }
}
MostrarAluno();