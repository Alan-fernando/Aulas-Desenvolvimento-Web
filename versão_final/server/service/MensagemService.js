const mensagemRepository = require('../repository/MensagemRepository');

    function listAll(callback) {
        mensagemRepository.listAll(callback);
    }
    function create(nome, mensagem, callback) {
        mensagemRepository.create(nome, mensagem, callback);
    }
    
module.exports = { listAll, create };