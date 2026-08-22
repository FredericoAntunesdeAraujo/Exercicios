import express from 'express';

const app = express();
app.use(express.json()); 

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


const filmes = [
    {
        id : 1,
        titulo : "Filme 1",
        diretor : "Edinaldo Pereira ADM Goat"
    },
    {
        id : 2,
        titulo : "Filme 2",
        diretor : "Rogério Alberto"
    },
    {
        id : 3,
        titulo : "Lentos e calmos",
        diretor : "Daniel Gomes"
    }
];


app.get('/api/filmes/:id', (req, res) => {
    const id = req.params.id;

    if ( id == 1 ){
        let agora = new Date().toLocaleTimeString();
        
        res.status(200).json(filmes[0]);
        console.log(`[${agora}] ${req.method} ${req.url}`);

    } else if ( id == 2){
        let agora = new Date().toLocaleTimeString();
        
        res.status(200).json(filmes[1]);
        console.log(`[${agora}] ${req.method} ${req.url}`);
    } else if (id == 3){
        let agora = new Date().toLocaleTimeString();
        
        res.status(200).json(filmes[2]);
        console.log(`[${agora}] ${req.method} ${req.url}`);

    } else {
        let agora = new Date().toLocaleTimeString();
        
        res.status(404).json({status : 'Nenhum filme encontrado'});
        console.log(`[${agora}] ${req.method} ${req.url}`);
    }
    
    
    
});

app.get('/api/filmes', (req,res) =>{
    let agora = new Date().toLocaleTimeString();
    const nomeD = req.query.diretor;
    
    const filmesDiretor = filmes.filter((filme) => {
        return filme.diretor === nomeD;
    });
    
    if (!nomeD){
        res.status(200).json(filmes);
        console.log(`[${agora}] ${req.method} ${req.url}`);

    } else if (filmesDiretor.length === 0){
        res.status(404).json({status : 'URL Inválida'});
        console.log(`[${agora}] ${req.method} ${req.url}`);

    } else{
        res.status(200).json(filmesDiretor);
        console.log(`[${agora}] ${req.method} ${req.url}`);
    }
})


app.post('/api/filmes', (req, res) =>{
    let agora = new Date().toLocaleTimeString();
    const { titulo, diretor } = req.body;

    if (!titulo || !diretor) {
        return res.status(400).json({ erro: 'Titulo e diretor são obrigatórios' });
    }

    res.status(201).json({
        mensagem: 'Usuário recebido com sucesso',
        dados: { titulo, diretor }})
    console.log(`[${agora}] ${req.method} ${req.url}`);
;
})



app.use('/', (req, res) =>{
    const agora = new Date().toLocaleTimeString();
    res.status(404).json({status : 'Página não encontrada'})
    console.log(`[${agora}] ${req.method} ${req.url}`);
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});