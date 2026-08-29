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

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});


