const express = require('express');
const router = express.Router();
const conexion = require('../db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
    }
  
    const query = 'SELECT * FROM docente WHERE email = ?';
    conexion.query(query, [email], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ mensaje: 'Error en la base de datos' });
      }
  
      if (results.length === 0) {
        return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }
  
      const hash = results[0].password;
      if (!bcrypt.compareSync(password, hash)) {
        return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
      }
  
      // Crea un token de autenticación y lo envía al cliente
      const token = jwt.sign({ email: results[0].email }, 'secreto', { expiresIn: '1h' });
      res.status(200).json({ token });
    });
  });

module.exports = router;