const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController.js');

router.get('/', professorController.listarProfessores);
router.post('/', professorController.criarProfessor);

module.exports = router;
