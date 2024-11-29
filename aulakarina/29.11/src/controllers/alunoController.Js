const Aluno = require('../models/aluno.js');

// Listar todos os alunos
exports.listarAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find();
    res.json(alunos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar alunos' });
  }
};

// Criar novo aluno
exports.criarAluno = async (req, res) => {
  try {
    const novoAluno = new Aluno(req.body);
    await novoAluno.save();
    res.status(201).json(novoAluno);
  } catch (err) {
    res.status(400).json({ error: 'Erro ao criar aluno' });
  }
};
