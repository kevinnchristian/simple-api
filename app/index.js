const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

app.get('/', (req, res, next) => {
  res.json(`Seja bem vindo ao VPS rodando Node.JS pelo Docker na porta: ${port}`);
});