// controllers/categoriaController.js
const Categoria = require('../models/categoriaModel');

exports.createCategoria = (req, res) => {
  const data = { nome: req.body.nome };
  Categoria.create(data, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(201).json({ id: results.insertId, ...data });
    }
  });
};

exports.getAllCategorias = (req, res) => {
  Categoria.findAll((err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    }else if (results.length === 0) {
        res.status(404).json({ message: 'NÃO EXISTE GATEGORIA CADASTRADA' });
    } else {
      res.status(200).json(results);
    }
  });
};

exports.getCategoriaById = (req, res) => {
  Categoria.findById(req.params.idcategoria, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else if (results.length === 0) {
      res.status(404).json({ message: 'Categoria não encontrada' });
    } else {
      res.status(200).json(results[0]);
    }
  });
};

exports.updateCategoria = (req, res) => {
  const data = { nome: req.body.nome };
  Categoria.update(req.params.idcategoria, data, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Categoria não encontrada' });
    } else {
      res.status(200).json({ id: req.params.idcategoria, ...data });
    }
  });
};

exports.deleteCategoria = (req, res) => {
  Categoria.delete(req.params.idcategoria, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else if (results.affectedRows === 0) {
      res.status(404).json({ message: 'Categoria não encontrada' });
    } else {
      res.status(200).json({ message: 'Categoria deletada com sucesso' });
    }
  });
};
