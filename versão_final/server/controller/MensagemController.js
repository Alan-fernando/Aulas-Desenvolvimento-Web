const mensagemService = require('../service/MensagemService');

function listAll(req, res) {
    mensagemService.listAll((err, dados) => {
        res.json(dados);
    });
}

function create(req, res) {
    const { nome, mensagem } = req.body;
    mensagemService.create(nome, mensagem, (err, dados) => {
        res.json(dados);
    });
}


module.exports = { listAll, create };