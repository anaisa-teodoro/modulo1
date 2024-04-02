//[M1S09] Ex. 1 -Introdução ao Express
/*const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Exercício M1S09 do trello");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
*/
//[M1S09] Ex. 2 - Rotas
/*const express = require("express");
const app = express();
const port = 3000;

// Rota GET para '/sobre'
app.get("/sobre", (req, res) => {
res.send("Esta é uma mensagem sobre o nosso aplicativo da semana 09.");
});

// Rota GET para '/contato'
app.get("/contato", (req, res) => {
res.send("Esta é uma mensagem de contato.");
});

app.listen(port, () => {
 console.log(`Servidor rodando na porta ${port}!`);
});
*/
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
    res.send("Esta é uma mensagem sobre o nosso aplicativo.");
   });
   
   // Rota GET para '/contato'
   app.get("/contato", (req, res) => {
    res.send("Esta é uma mensagem de contato.");
   });
   
   app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
   });
      