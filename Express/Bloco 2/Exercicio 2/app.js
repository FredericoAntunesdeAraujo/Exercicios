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

app.get('/api/filmes/:id', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const idBusca = req.params.id;

        const resultado = await client.query(`
            SELECT * FROM filmes
            WHERE id = $1
            `,[idBusca]);

        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: 'Filme não encontrado' });
        }

        res.json(resultado.rows[0]);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }   
});






app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});


