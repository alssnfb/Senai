const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/cursoController.js');

router.get('/', cursoController.listarCursos);
router.post('/', cursoController.criarCurso);

module.exports = router;
