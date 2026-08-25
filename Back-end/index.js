const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const users = require('./db.json').users;
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
    }
})

app.post('/users', async (req, res) => {
    try {
        const { nome, email, password } = req.body;
        const id = Math.random() * 1000000;
        const user = { id, nome, email, password };

        const data = require('./db.json');
        data.users.push(user);
        res.status(201).json({ message: "Usuário criado com sucesso" });
    } catch (err) {
        console.log(err);
    }
})

app.post('/users/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = require('./db.json').users;
        const userFound = user.find(u => u.email === email && u.password === password);

        if (userFound) {
            res.status(200).json({ status: 200, message: "Logado", userFound });
        } else {
            res.status(404).json({ status: 404, message: "Email ou senha incorretos" });
        }
    } catch (err) {
        console.log(err);
    }
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});