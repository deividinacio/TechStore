const Usuario = require('../models/usuarioModel');

exports.createUsuario = (req, res) => {
  const {nome, email, data_nascimento, cpf } = req.body;
  Usuario.create({nome, email, data_nascimento, cpf }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Usuário criado com sucesso!');
  });
};

exports.getAllUsuarios = (req, res) => {
  Usuario.findAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
     
  });
};

exports.getUsuarioById = (req, res) => {
  Usuario.findById(req.params.idusuario, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.getUsuarioByCPF = (req, res) => {
  Usuario.findByCPF(req.params.cpf, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};


exports.updateUsuario = (req, res) => {
  const {nome, email, data_nascimento, cpf } = req.body;
  Usuario.update(req.params.idusuario, {nome, email, data_nascimento, cpf }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Usuário atualizado com sucesso!');
  });
};

exports.deleteUsuario = (req, res) => {
  Usuario.delete(req.params.idusuario, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Usuário deletado com sucesso!');
  });
};
