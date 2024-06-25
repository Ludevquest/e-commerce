const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: "1",
    name: 'Fall Limited Edition Sneakers',
    price: 125,
    quantity: 0,
    image: '/images/image-product-1.jpg',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they ll withstand everything the weather can offer.',
  },
  // Adicione mais produtos conforme necessário
];

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Conectar ao MongoDB e adicionar logs de erro detalhados
mongoose.connect(config.mongoURI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Erro ao conectar ao MongoDB:', err));

// Usar as rotas de autenticação
app.use('/api/auth', authRoutes);

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
