const express = require('express');
const conexion = require('../db');
const router = express.Router();
const bcrypt = require('bcryptjs')

router.post('/', (req, res) => {
  const { nombreApellido, email, password, numeroLegajo } = req.body;

  if (!nombreApellido || !email || !password || !numeroLegajo) {
    return res.status(400).json({ mensaje: 'Faltan campos obligatorios' });
  }

  const hash = bcrypt.hashSync(password, 10);
  const query = 'INSERT INTO docente (nombreApellido, email, password, numeroLegajo) VALUES (?, ?, ?, ?)';

  conexion.query(query, [nombreApellido, email, hash, numeroLegajo], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ mensaje: 'Error al registrar usuario' });
    }
  });
});

module.exports = router;