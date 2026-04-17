const express = require('express');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

const MensagemController 
    = require('./controller/MensagemController');

app.get('/mensagem', MensagemController.listAll);
app.post('/mensagem', MensagemController.create);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});