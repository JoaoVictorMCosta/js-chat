Chat WebSocket

Este projeto implementa um chat simples baseado em WebSocket, permitindo a troca de mensagens em tempo real entre usuários.

📌 Funcionalidades

Login com nome de usuário e cor aleatória.

Envio e recebimento de mensagens em tempo real.

Diferenciação visual entre mensagens do usuário e de outros participantes.

Rolagem automática para a última mensagem.

🛠 Tecnologias Utilizadas

HTML, CSS e JavaScript puro (sem frameworks).

WebSockets para comunicação em tempo real.

📂 Estrutura do Código

Login Elements: Manipula a entrada do nome do usuário.

Chat Elements: Gerencia as mensagens enviadas e recebidas.

WebSocket Connection: Conecta ao servidor WebSocket para troca de mensagens.

Funções Auxiliares:

createMessageSelfElement(content): Cria um elemento para mensagens do próprio usuário.

createMessageOtherElement(content, sender, senderColor): Cria um elemento para mensagens de outros usuários.

getRandomColor(): Gera uma cor aleatória para o usuário.

scrollScreen(): Faz a rolagem automática para a última mensagem.

processMessage(event): Processa as mensagens recebidas.

handleLogin(event): Trata o login do usuário e inicia a conexão WebSocket.

sendMessage(event): Envia mensagens pelo WebSocket.

🚀 Como Rodar o Projeto

Certifique-se de ter um servidor WebSocket rodando na porta 8080.

Salve o código acima em um arquivo index.js.

Conecte esse código a uma página HTML contendo os elementos necessários.

Abra a página no navegador e interaja com o chat.

🔗 Melhorias Futuras

Implementação de um backend para gerenciar conexões e histórico de mensagens.

Adição de estilos CSS para melhor experiência do usuário.

Suporte a múltiplas salas de chat.

📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar!

