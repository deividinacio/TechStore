const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// Listar todos os pedidos
router.get('/', pedidoController.listar);

// Criar um novo pedido
router.post('/', pedidoController.criar);

// Listar todos os pedidos de um usuário específico
router.get('/:idusuario', pedidoController.listarPorUsuario);

module.exports = router;
