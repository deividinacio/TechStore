const db = require('../config/db');

const Pedido = {
  listar: (callback) => {
    db.query('SELECT * FROM pedido', callback);
  },
  listarPorUsuario: (idusuario, callback) => {
    db.query('SELECT * FROM pedido WHERE idusuario = ?', [idusuario], callback);
  },
  criar: (dados, callback) => {
    const { idusuario, data_pedido, status } = dados;
    db.query(
      'INSERT INTO pedido (idusuario, data_pedido, status) VALUES (?, ?, ?)',
      [idusuario, data_pedido, status],
      callback
    );
  }
};

module.exports = Pedido;
