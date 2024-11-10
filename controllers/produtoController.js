const Produto = require('../models/produtoModel');
const Categoria = require('../models/categoriaModel');


exports.createProduto = async (req, res) => {
  try {
    const { nome, preco, idcategoria } = req.body;
    const produto = await Produto.create({ nome, preco, idcategoria });
    res.status(201).json(produto);
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    res.status(500).json({ message: 'Erro ao cadastrar produto' });
  }
};
exports.getAllProdutos = (req, res) => {
  Produto.findAll((err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    }else if (results.length === 0) {
        res.status(404).json({ message: 'NÃO EXISTE PRODUTOS  CADASTRADOS' });
    } else {
      res.status(200).json(results);
    }
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
  Produto.update(req.params.idproduto, {nome, preco, idcategoria}, (err, result) => {
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


