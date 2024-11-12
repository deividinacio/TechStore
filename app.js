// app.js
const express = require('express');
const bodyParser = require('body-parser');
const categoriaRoutes = require('./routes/categoriaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
// const pedidoRoutes = require('./routes/pedidoRoutes');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', categoriaRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', produtoRoutes);
// app.use('/api/pedidos', pedidoRoutes);
//app.use('/api', pedidoRoutes);

// Servir a pasta 'public' com as views e arquivos estáticos
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});


