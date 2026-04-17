const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const init = () => {
    db.run(`
        CREATE TABLE IF NOT EXISTS mensagem (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        mensagem TEXT NOT NULL
        );
    `)
}

module.exports = db;
