const express = require('express');
const Product = require('../../models/Product');
const router = express.Router();

// Obter um produto pelo ID
router.get('/:id', async (req, res) => {
  try {
    const foundProduct = await Product.findById(req.params.id);
    if (!foundProduct) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.json(foundProduct);
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
});

module.exports = router;

