import express from 'express';
import pkg from 'pg';

const { Client } = pkg;

const app = express();

app.use(express.json());
app.use(express.static('public'));

function criarCliente() {
    return new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'root',
        database: 'filmes_db'
    });
}

app.get('/api/filmes', async (req, res) => {

    const client = criarCliente();
    try {

        await client.connect();
        const genero = req.query.genero;
        const ano = req.query.ano;

        let query = `
            SELECT f.id, f.titulo, f.diretor, f.ano, f.nota, g.nome AS genero
            FROM filmes f
            INNER JOIN generos g ON f.genero_id = g.id
            WHERE 1=1
        `;
        const params = [];

        if (req.query.genero) {
            params.push(req.query.genero);
            query += ` AND g.nome = $${params.length}`;
        }

        if (req.query.ano) {
            params.push(req.query.ano);
            query += ` AND f.ano = $${params.length}`;
        }

        if (req.query.nota_minima) {
            params.push(req.query.nota_minima);
            query += ` AND f.nota >= $${params.length}`;
        }

        query += ` ORDER BY f.titulo`;

        const resultado = await client.query(query, params);

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