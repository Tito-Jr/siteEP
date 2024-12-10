const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'public' (HTML principal e CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Servir arquivos estáticos da pasta 'modelagens' (PDFs e HTMLs de processos)
app.use('/modelagens', express.static(path.join(__dirname, 'modelagens')));

// Servir arquivos estáticos da pasta 'images' (imagens em png)
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

// Rota principal que serve o arquivo portfolio.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'portifolio.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});