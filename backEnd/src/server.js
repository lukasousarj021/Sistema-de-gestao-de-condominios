console.log("Hello World");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/email", (req, res) => {
  // Lógica para enviar o e-mail
  res.send("E-mail enviado com sucesso!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


