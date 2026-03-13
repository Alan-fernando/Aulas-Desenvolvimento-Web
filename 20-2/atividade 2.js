const express = require('express');
const app = express();

const PORT = 3000;
app.use(express.json());

let usuarios = [
    { id: 1, nome: "Ana", idade: 20 },
    { id: 2, nome: "Carlos", idade: 25 },
    { id: 3, nome: "Maria", idade: 30 }
];

app.get('/usuarios/:id', (req, res) => {

    // 1) Pegar o id da URL (req.params)
    const id = parseInt(req.params.id);

    // 2) Procurar usuario no array
    const usuario = usuarios.find(u => u.id === id);

    // 3) se nao encontrar
    if (!usuario) {
        return res.status(404).json({
            erro: "Usuário não encontrado"
        });
    }

    // 4) se encontrar, retorna o usuario 
    res.json(usuario);
});

app.post('/usuarios', (req, res) => {

     console.log(req.body);

    const nome = req.body.nome;
    const email = req.body.email;

    //validar campos
    if (!nome || !email) {
        return res.status(400).json({
            erro: "Os campos nome e email são obrigatórios."
        });
    }

    //criar objeto novo
    const novoUsuario = {
        id: usuarios.length > 0 
            ? usuarios[usuarios.length - 1].id + 1 
            : 1,
        nome: nome,
        email: email
    };

    //adicionar a lista
    usuarios.push(novoUsuario);

    //responder status 201
    res.status(201).json(novoUsuario);

})

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});