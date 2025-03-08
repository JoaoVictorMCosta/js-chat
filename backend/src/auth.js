const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const router = express.Router();

// Usuário fictício (depois podemos salvar no MongoDB)
const users = [{ id: "1", username: "joao", password: "123456" }];

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
});

module.exports = router;
