const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Rota para criar um novo pedido
router.post('/criar', pedidoController.criarPedido);
router.get('/', pedidoController.listarPedidosPorUsuario);
router.get('/cpf', pedidoController.listarPedidosPorCPF);

module.exports = router;
