const db = require('../database');

function listAll(callback) {
    db.all(
        'SELECT * FROM mensagem',
        [],
        callback
    );
}
function create(nome, mensagem, callback) {
    db.run(
        'INSERT INTO mensagem (nome, mensagem) VALUES (?, ?)',
        [nome, mensagem],
        callback
    );
}
module.exports = { listAll, create };