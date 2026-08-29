import express from 'express';
import pkg from 'pg';
const { Client } = pkg;

const app = express();
app.use(express.json());
app.use(express.static('public'));

function criarCliente() {
    return new Client({
        host:     'localhost',
        port:     5432,
        user:     'postgres',
        password: 'root',
        database: 'filmes_db'
    });
}

app.get('/api/filmes', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();
        const resultado = await client.query(`
            SELECT * FROM filmes
        `);

        res.json(resultado.rows);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }   
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});


// Por que usamos try/catch/finally em vez de só try/catch? O que aconteceria com a conexão se houvesse um erro e não tivéssemos o finally?

// Utilizamos try,catch e finally para apresentar o que queremos fazer ( no try ), o erro ( no catch ) e fechar a conexão com o banco ( com o finally );
// Se não houvesse o finally o banco iria ter diversas requisições sem parar.