const express = require('express');
const cors = require('cors');
const { randomUUID } = require('crypto');
const { readDB, writeDB } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const data = await readDB();
        res.status(200).json(data.users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao ler usuários' });
    }
});

app.post('/users', async (req, res) => {
    try {
        const { nome, email, password } = req.body;

        if (!nome || !email || !password) {
            return res.status(400).json({ message: 'nome, email e password são obrigatórios' });
        }

        const data = await readDB();

        if (data.users.some(u => u.email === email)) {
            return res.status(409).json({ message: 'Email já cadastrado' });
        }

        const user = { id: randomUUID(), nome, email, password };
        data.users.push(user);

        await writeDB(data);

        res.status(201).json({ message: 'Usuário criado com sucesso', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao criar usuário' });
    }
});

app.post('/users/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await readDB();
        const userFound = data.users.find(
            u => u.email === email && u.password === password
        );

        if (!userFound) {
            return res.status(404).json({ message: 'Email ou senha incorretos' });
        }

        const { password: _, ...safeUser } = userFound;
        res.status(200).json({ message: 'Logado', user: safeUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro no login' });
    }
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));