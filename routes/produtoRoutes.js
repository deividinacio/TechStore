const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.post('/produtos', produtoController.createProduto);
router.get('/produtos', produtoController.getAllProdutos);
router.get('/produtos/:idproduto', produtoController.getProdutoById);
router.put('/produtos/:idproduto', produtoController.updateProduto);
router.delete('/produtos/:idproduto', produtoController.deleteProduto);

module.exports = router;
