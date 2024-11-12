const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Rota para criar um novo pedido
router.post('/criar', pedidoController.criarPedido);

module.exports = router;
