import express from 'express';

const app = express();

app.get('/', (req, res) => {
    let agora = new Date().toLocaleTimeString();

    res.json({ status: 'ok', sistema: 'Filmes API' });
    console.log(`[${agora}] ${req.method} ${req.url}`);
});

app.get('/api/saude', (req, res) => {
    let agora = new Date().toLocaleTimeString();

    res.status(200).json({ status : 'ok', agora: new Date().toLocaleTimeString(), dia : new Date().getUTCDay()});    
    console.log(`[${agora}] ${req.method} ${req.url}`);
});

app.use('/', (req, res) =>{
    const agora = new Date().toLocaleTimeString();
    res.status(404).json({status : 'Página não encontrada'})
    console.log(`[${agora}] ${req.method} ${req.url}`);
});



app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});