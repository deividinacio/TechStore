const connection = require('../config/db');

class Pedido {
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
