# 💬 Chat WebSocket

Este projeto implementa um **chat simples** baseado em WebSocket, permitindo a troca de mensagens em **tempo real** entre usuários.

<br>

---

## 📌 Funcionalidades

✅ **Login** com nome de usuário e cor aleatória.  
✅ **Envio e recebimento de mensagens** em tempo real.  
✅ **Diferenciação visual** entre mensagens do usuário e de outros participantes.  
✅ **Rolagem automática** para a última mensagem.  

<br>

---

## 🛠 Tecnologias Utilizadas

- <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">HTML</a> <img align="center" alt="HTML" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg">  
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS</a> <img align="center" alt="CSS" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg">  
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">JavaScript</a> <img align="center" alt="JavaScript" height="20" width="30" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">  
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/WebSockets_API">WebSockets</a> para comunicação em tempo real.  

<br>

---

## 📂 Estrutura do Código

📌 **Login Elements:** Manipula a entrada do nome do usuário.  
📌 **Chat Elements:** Gerencia as mensagens enviadas e recebidas.  
📌 **WebSocket Connection:** Conecta ao servidor WebSocket para troca de mensagens.  
📌 **Funções Auxiliares:**  

```javascript
// Cria um elemento para mensagens do próprio usuário
function createMessageSelfElement(content) { ... }

// Cria um elemento para mensagens de outros usuários
function createMessageOtherElement(content, sender, senderColor) { ... }

// Gera uma cor aleatória para o usuário
function getRandomColor() { ... }

// Faz a rolagem automática para a última mensagem
function scrollScreen() { ... }

// Processa as mensagens recebidas
function processMessage(event) { ... }

// Trata o login do usuário e inicia a conexão WebSocket
function handleLogin(event) { ... }

// Envia mensagens pelo WebSocket
function sendMessage(event) { ... }
```

<br>

---

## 🚀 Como Rodar o Projeto

### 1️⃣ Certifique-se de ter um **servidor WebSocket** rodando na porta **8080**.

```bash
# Comando para iniciar um servidor WebSocket simples (Node.js)
npm install
node server.js
```

### 2️⃣ Salve o código acima em um arquivo **index.js**.

### 3️⃣ Conecte esse código a uma página **HTML** contendo os elementos necessários.

### 4️⃣ Abra a página no navegador e interaja com o chat.

<br>

---

## 🔗 Melhorias Futuras

✨ Implementação de um **backend** para gerenciar conexões e histórico de mensagens.  
✨ Adição de **estilos CSS** para melhor experiência do usuário.  
✨ Suporte a **múltiplas salas de chat**.  

<br>

---

## 📜 Licença

Este projeto está sob a **licença MIT**. Sinta-se à vontade para usar e modificar! 🚀

