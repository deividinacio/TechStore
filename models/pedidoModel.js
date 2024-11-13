const connection = require('../config/db');


class Pedido {

  static obterPedidosComDetalhes(userID) {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT 
        u.nome, u.email, u.cpf, p.data_pedido, pr.nome AS nome_produto, pr.preco, pp.quantidade, c.nome AS categoria
        FROM pedido p
        INNER JOIN pedido_produto pp ON p.idpedido = pp.idpedido
        INNER JOIN produto pr ON pp.idproduto = pr.idproduto
        INNER JOIN categoria c ON pr.idcategoria = c.idcategoria
        INNER JOIN usuario u ON p.idusuario = u.idusuario
        WHERE p.idusuario = ?
        ORDER BY p.data_pedido DESC
      `;
      
      connection.query(sql, [userID], (error, results) => {
        if (error) {
          console.error('Erro na consulta ao banco de dados:', error); // Log para debugar
          reject(error);  // Rejeita a promessa com o erro
        } else {
          resolve(results);  // Resolve a promessa com os resultados da consulta
        }
      });
    });
  }

  static obterPedidosComDetalhesCPF(userCPF) {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT 
          u.nome, u.email, u.cpf, p.data_pedido, pr.nome AS nome_produto, 
          pr.preco, pp.quantidade, c.nome AS categoria
        FROM pedido p
        INNER JOIN pedido_produto pp ON p.idpedido = pp.idpedido
        INNER JOIN produto pr ON pp.idproduto = pr.idproduto
        INNER JOIN categoria c ON pr.idcategoria = c.idcategoria
        INNER JOIN usuario u ON p.idusuario = u.idusuario
        WHERE u.cpf = ?
        ORDER BY p.data_pedido DESC
      `;

      connection.query(sql, [userCPF], (error, results) => {
        if (error) {
          console.error('Erro na consulta ao banco de dados:', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }


  // Função para criar um novo pedido e retornar o ID do pedido criado
  static criarPedido(idusuario, callback) {
    const query = `INSERT INTO pedido (idusuario) VALUES (?)`;
    connection.query(query, [idusuario], (err, result) => {
      if (err) return callback(err);
      callback(null, result.insertId); // Retorna o ID do pedido criado
    });
  }
}

module.exports = Pedido;
