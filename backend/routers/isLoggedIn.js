const express = require('express');
const router = express.Router();
const autenticacion = require('../auth.js');

router.get('/', autenticacion, (req, res) => {
  res.json({ isLoggedIn: true })
});

module.exports = router;