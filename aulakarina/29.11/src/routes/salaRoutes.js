const express = require('express');
const router = express.Router();
const salaController = require('./controllers/salaController.js');

router.get('/', salaController.listarSalas);
router.post('/', salaController.criarSala);

module.exports = router;
