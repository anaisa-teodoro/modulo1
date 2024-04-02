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
