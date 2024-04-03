//[M1S09] Ex. 1 -Introdução ao Express
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Exercício M1S09 do trello");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});

//[M1S09] Ex. 2 - Rotas
const express = require("express");
const app = express();
const port = 3000;

// Rota GET para '/sobre'
app.get("/sobre", (req, res) => {
res.send("Esta é uma mensagem sobre o nosso aplicativo da semana 09.");
});

// Rota GET para '/contato'
app.get("/contato", (req, res) => {
res.send("Contato: anaisa_teodoro@estudante.sesisenai.org.br");
});



//[M1S09] Ex. 3 - MIddleware
const express = require('express');
const app = express();

// Middleware para registrar informações sobre as solicitações
app.use(express.json());
app.use((req, res, next) => {
    const method = req.method;
    const url = req.originalUrl;
    const date = new Date();

    console.log(`Método HTTP: ${method}`);
    console.log(`URL: ${url}`);
    console.log(`Hora: ${date}`);

    next();
});

// Rotas da aplicação
app.get('/', (req, res) => {
    res.send('Página inicial - Semana 09');
});

app.get('/sobre', (req, res) => {
    res.send('Sobre nós');
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



//[M1S09] Ex. 3 - MIddleware
const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`Método: ${req.method}, URL: ${req.url}, Horário: ${timestamp}`);
    next();
   };
   const express = require("express");
   const app = express();
   const port = 3000;
   
   // Adicionando o middleware de registro
   app.use(logger);
   
   // Rota GET para '/sobre'
   app.get("/sobre", (req, res) => {
    res.send("Esta é uma mensagem sobre o nosso aplicativo criado na Semana 09.");
   });
   
   // Rota GET para '/contato'
   app.get("/contato", (req, res) => {
    res.send("Esta é uma mensagem para envio de contato para anaisa_teodoro@estudante.sesisenai.org.br.");
   });
   
   app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
   });
   //[M1S09] Ex. 4 - Paramêtros
  //[M1S09] Ex. 5 - Arquivos Estáticos
  //[M1S09] Ex. 6 - CRUD

const express = require('express');
const app = express();


let userArray = [];

// Middleware para parsing de JSON
app.use(express.json());

// Rota para produto
app.get("/produto/:id", (req, res) => {
    const id = req.params.id;
    res.send(`id produto selecionado: ${id}`);
});

// CRUD de usuários
// Obter todos os usuários
app.get("/users", (req, res) => {
    res.send(JSON.stringify(userArray));
});


app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = userArray.find(user => user.id === id);
    if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.send(JSON.stringify(user));
});


app.post("/users", (req, res) => {
    const { id, nome, idade } = req.body;
    const newUser = { id, nome, idade };
    userArray.push(newUser);
    res.status(201).json({ message: `Usuário criado com sucesso: ${nome}, ${idade}` });
});


app.put("/users/:id", (req, res) => {
    const { nome, idade } = req.body;
    const userId = parseInt(req.params.id);
    const userIndex = userArray.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }
    userArray[userIndex].nome = nome;
    userArray[userIndex].idade = idade;
    res.status(200).json({ message: `Dados do usuário atualizados: ${userArray[userIndex].id}, ${userArray[userIndex].nome}, ${userArray[userIndex].idade}` });
});


app.delete("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = userArray.findIndex(user => user.id === userId);
    if (userIndex === -1) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }
    userArray.splice(userIndex, 1);
    res.status(200).json({ message: "Usuário removido com sucesso" });
});

app.listen(3000, () => {
    console.log("Iniciando servidor na porta 3000");
});
