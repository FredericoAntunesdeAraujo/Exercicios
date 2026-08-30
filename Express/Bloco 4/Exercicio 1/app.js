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


app.post('/api/filmes', async (req, res) =>{
    const client = criarCliente();

    
    try {
        await client.connect();
        
        const { titulo, diretor, ano, nota, duracao } = req.body;
        
        if (!titulo || !diretor || nota < 0 || nota > 10 ) {
            res.status(400).json({mensagem: 'Titulo, diretor e nota devem ser válidos'})
        }

        const resultado = await client.query(`
            INSERT INTO filmes (titulo, diretor, ano, nota, duracao )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
        `, [titulo, diretor, ano, nota, duracao  ]);

        res.status(201).json(resultado.rows[0]);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
})

app.get('/api/filmes', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();
        const resultado = await client.query(`
            SELECT
                f.id,
                f.titulo,
                f.diretor,
                f.ano,
                f.nota,
                g.nome AS genero
            FROM filmes f
            INNER JOIN generos g ON f.genero_id = g.id
            ORDER BY f.titulo
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
            SELECT
                f.id,
                f.titulo,
                f.diretor,
                f.ano,
                f.nota,
                g.nome AS genero
            FROM filmes f
            INNER JOIN generos g ON f.genero_id = g.id
            WHERE f.id = $1
            ORDER BY f.id
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


app.put('/api/filmes/:id', async (req, res) => {
    const client = criarCliente();

    try {
        await client.connect();

        const { id } = req.params;
        const { titulo, diretor, ano, nota, duracao } = req.body;

        if (!titulo || !diretor || nota < 0 || nota > 10) {
            return res.status(400).json({
                mensagem: 'Título, diretor e nota devem ser válidos'
            });
        }

        if (Number(id) <= 0 || Number.isNaN(Number(id))) {
            return res.status(400).json({
                mensagem: 'ID deve ser válido'
            });
        }

        const resultado = await client.query(`
            UPDATE filmes
            SET titulo = $1,
                diretor = $2,
                ano = $3,
                nota = $4,
                duracao = $5
            WHERE id = $6
            RETURNING *
        `, [titulo, diretor, ano, nota, duracao, id]);

        if (resultado.rows.length === 0) {
            return res.status(404).json({
                mensagem: 'Filme não encontrado'
            });
        }

        res.status(200).json(resultado.rows[0]);

    } catch (erro) {
        res.status(500).json({ erro: erro.message });

    } finally {
        await client.end();
    }
});


app.delete('/api/filmes/:id', async (req, res) => {

    try {
    const client = criarCliente();
    await client.connect();
    const resultado = await client.query(`
        DELETE FROM filmes
        WHERE id = $1
        RETURNING titulo`, [req.params.id]);
        
        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: 'Filme não encontrado' });
        }
        
        res.json({ mensagem: `"${resultado.rows[0].titulo}" removido com sucesso` });
            
    } catch (erro) {
        res.status(500).json({ erro: erro.message });

    } finally {
        await client.end();
    }


});

app.get('/api/generos', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const resultado = await client.query(`
            SELECT * FROM generos`);

        if (resultado.rows.length === 0) {
            return res.status(404).json({ erro: 'Filme não encontrado' });
        }

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