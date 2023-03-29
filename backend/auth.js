const jwt = require('jsonwebtoken');

// Middleware para verificar el token de autenticación
const autenticacion = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ mensaje: 'Token de autenticación no proporcionado' });
    }
  
    jwt.verify(token, 'secreto', (err, decoded) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ mensaje: 'Error al verificar el token de autenticación' });
      }
  
      req.email = decoded.email;
      next();
    });
  }

module.exports = autenticacion;