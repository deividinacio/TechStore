// // models/pedidoModel.js
// const db = require('../config/db');  // Assumindo que você tenha uma configuração de banco de dados

// const PedidoModel = {
//   // Função para criar o pedido
//   criar: async (idusuario) => {
//     try {
//       const [result] = await db.execute(
//         'INSERT INTO pedido (idusuario) VALUES (?)', 
//         [idusuario]
//       );
//       return result.insertId;  // Retorna o ID do pedido criado
//     } catch (error) {
//       console.error('Erro ao criar pedido:', error);
//       throw error;
//     }
//   },

//   // Função para adicionar produtos ao pedido
//   adicionarProdutos: async (idpedido, itens) => {
//     try {
//       for (let item of itens) {
//         await db.execute(
//           'INSERT INTO pedido_produto (idpedido, idproduto, quantidade) VALUES (?, ?, ?)',
//           [idpedido, item.idproduto, item.quantidade]
//         );
//       }
//     } catch (error) {
//       console.error('Erro ao adicionar produtos ao pedido:', error);
//       throw error;
//     }
//   }
// };

// module.exports = PedidoModel;
