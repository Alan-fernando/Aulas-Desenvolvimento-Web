const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/comentarios', (req, res) => {

    const nome = req.body.nome;
    const mensagem = req.body.mensagem;

    if (!nome || !mensagem) {
        return res.status(400).json({
            erro: "Nome e mensagem são obrigatórios"
        });
    }

    const comentario = {
        nome,
        mensagem
    };

    console.log("Novo comentário:", comentario);

    res.status(201).json(comentario);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});