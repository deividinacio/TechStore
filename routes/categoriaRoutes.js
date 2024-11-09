// routes/categoriaRoutes.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.post('/categorias', categoriaController.createCategoria);
router.get('/categorias', categoriaController.getAllCategorias);
router.get('/categorias/:idcategoria', categoriaController.getCategoriaById);
router.put('/categorias/:idcategoria', categoriaController.updateCategoria);
router.delete('/categorias/:idcategoria', categoriaController.deleteCategoria);

module.exports = router;
