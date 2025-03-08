const { WebSocketServer } = require("ws");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const authRoutes = require("./auth");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

const server = app.listen(process.env.PORT || 8080);

const wss = new WebSocketServer({ server });

wss.on("connection", (ws, req) => {
    const params = new URL(req.url, `http://localhost`).searchParams;
    const token = params.get("token");

    if (!token) {
        ws.close();
        return;
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        ws.userId = decoded.userId;

        ws.on("error", console.error);
        ws.on("message", (data) => {
            wss.clients.forEach((client) => {
                if (client.readyState === ws.OPEN) {
                    client.send(data.toString());
                }
            });
        });
    } catch (error) {
        ws.close();
    }
});
