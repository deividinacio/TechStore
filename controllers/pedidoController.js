const Pedido = require('../models/pedidoModel');

exports.listar = (req, res) => {
  Pedido.listar((error, results) => {
    if (error) return res.status(500).send(error);
    res.json(results);
  });
};

exports.listarPorUsuario = (req, res) => {
  Pedido.listarPorUsuario(req.params.idusuario, (error, results) => {
    if (error) return res.status(500).send(error);
    res.json(results);
  });
};

exports.criar = (req, res) => {
  Pedido.criar(req.body, (error, results) => {
    if (error) return res.status(500).send(error);
    res.status(201).send({ message: 'Pedido criado com sucesso!' });
  });
};
