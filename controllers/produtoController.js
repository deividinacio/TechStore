const Produto = require('../models/produtoModel');

exports.createProduto = (req, res) => {
  const { nome, preco, idcategoria } = req.body;
  Produto.create({ nome, preco, idcategoria }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Produto criado com sucesso!');
  });
};

exports.getAllProdutos = (req, res) => {
  Produto.findAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getProdutoById = (req, res) => {
  Produto.findById(req.params.idproduto, (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
};

exports.updateProduto = (req, res) => {
  const { nome, preco, idcategoria } = req.body;
  Produto.update(req.params.idproduto, { nome, preco, idcategoria }, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Produto atualizado com sucesso!');
  });
};

exports.deleteProduto = (req, res) => {
  Produto.delete(req.params.idproduto, (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Produto deletado com sucesso!');
  });
};
