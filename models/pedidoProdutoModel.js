const connection = require('../config/db');

class PedidoProduto {
  // Função para adicionar produtos ao pedido
  static adicionarProdutoAoPedido(idpedido, idproduto, quantidade, callback) {
    const query = `INSERT INTO pedido_produto (idpedido, idproduto, quantidade) VALUES (?, ?, ?)`;
    connection.query(query, [idpedido, idproduto, quantidade], (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    });
  }
}

module.exports = PedidoProduto;
