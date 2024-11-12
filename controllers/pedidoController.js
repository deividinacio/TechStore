const Pedido = require('../models/pedidoModel');
const PedidoProduto = require('../models/pedidoProdutoModel');

exports.criarPedido = (req, res) => {
  const userID = req.headers['user-id']; // Captura o ID do usuário do cabeçalho

  if (!userID) {
    return res.status(400).json({ message: 'Usuário não autenticado' });
  }

  const { produtos } = req.body;
  if (!produtos || !Array.isArray(produtos) || produtos.length === 0) {
    return res.status(400).json({ message: 'Produtos inválidos ou ausentes' });
  }

  // Criação do pedido
  Pedido.criarPedido(userID, (err, idpedido) => {
    if (err) {
      console.error('Erro ao criar pedido:', err);
      return res.status(500).json({ message: 'Erro ao criar pedido' });
    }

    // Adiciona cada produto ao pedido
    let produtosAdicionados = 0;
    produtos.forEach((produto) => {
      PedidoProduto.adicionarProdutoAoPedido(idpedido, produto.idproduto, produto.quantidade, (err) => {
        if (err) {
          console.error('Erro ao adicionar produto ao pedido:', err);
          return res.status(500).json({ message: 'Erro ao adicionar produtos ao pedido' });
        }
        
        produtosAdicionados++;
        if (produtosAdicionados === produtos.length) {
          res.status(201).json({ message: 'Pedido criado com sucesso', idpedido });
        }
      });
    });
  });
};
