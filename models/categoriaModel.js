// models/Categoria.js
const db = require('../config/db');

class Categoria {
  static create(data, callback) {
    const query = 'INSERT INTO categoria SET ?';
    db.query(query, data, callback);
  }

  static findAll(callback) {
    const query = 'SELECT * FROM categoria';
    db.query(query, callback);
  }

  static findById(idcategoria, callback) {
    const query = 'SELECT * FROM categoria WHERE idcategoria = ?';
    db.query(query, [idcategoria], callback);
  }

  static update(idcategoria, data, callback) {
    const query = 'UPDATE categoria SET ? WHERE idcategoria = ?';
    db.query(query, [data, idcategoria], callback);
  }

  static delete(idcategoria, callback) {
    const query = 'DELETE FROM categoria WHERE idcategoria = ?';
    db.query(query, [idcategoria], callback);
  }
}

module.exports = Categoria;
