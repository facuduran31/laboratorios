const express = require('express');
const router = express.Router();
const conexion = require('../db');

router.get('/', (req, res) => {
  const query = `SELECT * FROM laboratorio`;
  conexion.query(query, (err, results) => {
    if(err) throw res.send(err);
    res.send(results);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM laboratorio WHERE idLaboratorio = ${id}`;
  conexion.query(query, (err, results) => {
    if(err) throw res.send(err);
    res.send(results);
  });
});

router.post('/', (req, res) => {
  const nombre = req.body.nombre
  const query = `INSERT INTO laboratorio (nombre) VALUES (?)`;
  conexion.query(query, [nombre], (err, results) => {
    if(err) throw res.send(err);
    res.send(results);
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const query = `DELETE FROM laboratorio WHERE idLaboratorio = ${id}`;
  conexion.query(query, (err, results) => {
    if(err) throw res.send(err);
    res.send(results);
  });
});

router.put('/:id', (req, res) => {
  console.log('se edio un labbb')
  const id = req.params.id;
  const query = `UPDATE laboratorio SET ? WHERE idLaboratorio = ${id}`;
  conexion.query(query, [req.body], (err, results) => {
    if(err) throw res.send(err);
    res.send(results);
    console.log('se edito un lab')
  });
});

module.exports = router;