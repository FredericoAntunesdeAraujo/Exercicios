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
        database: 'cardapio_db'
    });
}


app.get('/api/pratos', async (req, res) => {
    const client = criarCliente();

    try {
        await client.connect();

        const categoria = req.query.categoria || '';

        const resultado = await client.query(`
            SELECT
                p.id,
                p.nome,
                p.descricao,
                p.preco,
                p.disponivel,
                c.nome AS categoria
            FROM pratos p
            INNER JOIN categorias c ON p.categoria_id = c.id
            WHERE $1 = '' OR c.nome = $1
            ORDER BY p.id
        `,[categoria]);

        res.json(resultado.rows);

    } catch (erro) {
        res.status(404).json({ erro: erro.message });
    } finally {
        await client.end();
    }   
});

app.get('/api/pratos/:id', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const idBusca = req.params.id;

        const resultado = await client.query(`
        SELECT
            p.id,
            p.nome,
            p.descricao,
            p.preco,
            p.disponivel,
            c.nome AS categoria
        FROM pratos p
        INNER JOIN categorias c ON p.categoria_id = c.id
        WHERE p.id = $1
        ORDER BY p.id
            `,[idBusca]);

        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: 'ID do prato não encontrado' });
        }

        res.json(resultado.rows[0]);

    } catch (erro) {
        res.status(404).json({ erro: erro.message });
    } finally {
        await client.end();
    }   
});

app.get('/api/categorias', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const resultado = await client.query(`
        SELECT * FROM categorias
            `);

        res.json(resultado.rows);

    } catch (erro) {
        res.status(404).json({ erro: erro.message });
    } finally {
        await client.end();
    }   
});

app.post('/api/pratos', async (req, res) => {
    const client = criarCliente();

    try {
        await client.connect();

        const { nome, descricao, preco, disponivel, categoria_id} = req.body;
        
        if (!nome || preco <= 0 ||  categoria_id <= 0 || categoria_id > 4 ) {
            res.status(400).json({mensagem: 'Nome, preço e ID de categoria devem ser válidos'})
            return;
        }

        const resultado = await client.query(`
            INSERT INTO pratos (nome, descricao, preco, disponivel, categoria_id )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `, [nome, descricao, preco, disponivel, categoria_id]);

        return res.status(201).json(resultado.rows[0]);

    } catch (erro) {
        if (erro.code === '23503') {
            return res.status(400).json({ erro: 'Gênero não encontrado' })
        };
    } finally {
        await client.end();
    } 

})

app.delete('/api/pratos/:id', async (req, res) => {
    const client = criarCliente();

    try {
        await client.connect();

        const resultado = await client.query(
            'DELETE FROM pratos WHERE id = $1 RETURNING nome',
            [req.params.id]
        );
        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: 'Prato não encontrado' });
        }
        return res.json({ mensagem: `"${resultado.rows[0].nome}" removido com sucesso` });

        // return res.status(201).json(resultado.rows[0]);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    } 
})



app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});