const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    // Verificar se há um token JWT no cabeçalho Authorization
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }

    // Verificar se o token é válido
    const decodedToken = jwt.verify(token, 'secret');
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;
