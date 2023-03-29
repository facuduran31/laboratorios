const express = require('express');
const router = express.Router();
const conexion = require('../db.js');

// CREATE
router.post('/', (req, res) => {
  let nombreApellido = req.body.nombreApellido;
  let numeroLegajo = req.body.numeroLegajo;
  let email = req.body.numeroLegajo;
  let password = req.body.password;
  let query = `INSERT INTO docente (nombreApellido, numeroLegajo, email, password) VALUES ('${nombreApellido}', '${numeroLegajo}', '${email}', '${password}')`;
  conexion.query(query, (err, results) => {
    if(err) throw res.send(err);
    res.send(results);
  });
});

// READ
router.get('/', (req, res) => {
  let query = 'SELECT * FROM docente';
  conexion.query(query, (err, results) => {
    if (err) throw res.status(500).send(err);
    res.send(results);
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  conexion.query('SELECT * FROM docente WHERE idDocente = ?', id, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  let id = req.params.id;
  let query = 'UPDATE docente SET ? WHERE idDocente = ?';
  conexion.query(query, [req.body, id], (err, results) => {
    if(err) throw res.send(err);
    res.send(results);
  });
});

module.exports = router;