// // controllers/pedidoController.js
// const PedidoModel = require('../models/pedidoModel');

// const PedidoController = {
//   // Função para processar o pedido
//   fazerPedido: async (req, res) => {
//     const { itens } = req.body;  // Itens enviados pelo frontend
 
//     const idusuario = sessionStorage.getItem('userID'); // userID // Pega o ID do usuário da sessão

//     if (!idusuario) {
//       return res.status(401).json({ error: 'Usuário não autenticado' });
//     }

//     try {
//       // Criação do pedido
//       const idpedido = await PedidoModel.criar(idusuario);

//       // Adiciona os produtos ao pedido
//       await PedidoModel.adicionarProdutos(idpedido, itens);

//       // Retorna a resposta ao frontend
//       res.status(200).json({ message: 'Pedido realizado com sucesso', idpedido });
//     } catch (error) {
//       console.error('Erro ao processar pedido:', error);
//       res.status(500).json({ error: 'Erro ao processar pedido' });
//     }
//   }
// };

// module.exports = PedidoController;
