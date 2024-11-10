const db = require('../config/db');

class Produto {
  static create(data, callback) {
    const query = 'INSERT INTO produto SET ?';
    db.query(query, data, callback);
  }

  static findAll(callback) {
    db.query('SELECT * FROM produto', callback);
  }

  static findAllJoin(callback) {
    db.query('SELECT produto.idproduto, ' + 
     'produto.nome, ' + 
     'produto.preco, ' +  
     'produto.idcategoria, ' +  
     'categoria.nome as categoria_nome ' +  
     'from produto ' + 
     'inner join categoria ' +  
     'on produto.idcategoria = categoria.idcategoria', callback);
  }


  static findById(idproduto, callback) {
    db.query('SELECT * FROM produto WHERE idproduto = ?', [idproduto], callback);
  }

  static update(idproduto, data, callback) {
    db.query('UPDATE produto SET ? WHERE idproduto = ?', [data, idproduto], callback);
  }

  static delete(idproduto, callback) {
    db.query('DELETE FROM produto WHERE idproduto = ?', [idproduto], callback);
  }
}

module.exports = Produto;
