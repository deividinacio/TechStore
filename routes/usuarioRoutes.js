const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuarios', usuarioController.createUsuario);
router.get('/usuarios', usuarioController.getAllUsuarios);
router.get('/usuarios/:idusuario', usuarioController.getUsuarioById);
router.get('/usuarios/cpf/:cpf', usuarioController.getUsuarioByCPF);
router.put('/usuarios/:idusuario', usuarioController.updateUsuario);
router.delete('/usuarios/:idusuario', usuarioController.deleteUsuario);

module.exports = router;
