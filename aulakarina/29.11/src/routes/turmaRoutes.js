const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController.js');

router.get('/', turmaController.listarTurmas);
router.post('/', turmaController.criarTurma);

module.exports = router;
