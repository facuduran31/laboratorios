const express = require('express');
const router = express.Router();
const conexion = require('../db');

router.get('/:idLaboratorio', (req, res) => {
  const idLaboratorio = req.params.idLaboratorio
  const query = 'SELECT * FROM computadora WHERE Laboratorio_idLaboratorio = ?';
  conexion.query(query, [idLaboratorio], (err, results) => {
    if(err) throw res.send(err);
    console.log(results)
    res.send(results);
  });
});

module.exports = router;