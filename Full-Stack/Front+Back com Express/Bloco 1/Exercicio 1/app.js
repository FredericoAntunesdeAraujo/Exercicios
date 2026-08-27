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
        database: 'teste_db'
    });
}

app.get('/api/tarefas', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();
        const resultado = await client.query(`
            SELECT * FROM tarefas;
        `);
        res.json(resultado.rows);
    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});


app.post('/api/tarefas', async (req, res) => {
    const client = criarCliente();
    try {
        await client.connect();

        const { idTarefa, nomeTarefa, tarefaConcluida } = req.body;

        if (!idTarefa || !nomeTarefa || tarefaConcluida == null) {
            return res.status(400).json({
                erro: 'ID, tarefa e se está concluida ( 0 ou 1 ) é obrigatório'
            });
        }

        const resultado = await client.query(`
            INSERT INTO tarefas (id, titulo, concluida)
            VALUES ($1, $2, $3)
            RETURNING *
        `, [idTarefa, nomeTarefa, tarefaConcluida]);

        res.status(201).json(resultado.rows[0]);



    } catch (erro) {
        res.status(500).json({ erro: erro.message });
    } finally {
        await client.end();
    }
});




app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});