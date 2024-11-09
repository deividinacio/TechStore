const db = require('../config/db');

class Usuario {
  static create(data, callback) {
    const query = 'INSERT INTO usuario SET ?';
    db.query(query, data, callback);
  }

  static findAll(callback) {
    db.query('SELECT * FROM usuario', callback);
  }

  static findById(idusuario, callback) {
    db.query('SELECT * FROM usuario WHERE idusuario = ?', [idusuario], callback);
  }

  static findByCPF(cpf, callback) {
    db.query('SELECT * FROM usuario WHERE cpf = ?', [cpf], callback);
  }


  static update(idusuario, data, callback) {
    db.query('UPDATE usuario SET ? WHERE idusuario = ?', [data, idusuario], callback);
  }

  static delete(idusuario, callback) {
    db.query('DELETE FROM usuario WHERE idusuario = ?', [idusuario], callback);
  }
}

module.exports = Usuario;
